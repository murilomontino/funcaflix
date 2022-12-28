import { left, PromiseEither, right } from '@/shared/either'
import { IGetterProduct } from '@/types/getters'
import { db } from 'mapacultural-database'
import { Op } from 'sequelize'

import { UseCase } from '../ports/use-case'
import { GetterProduct } from '@/domain/entities'


/**
 * AUDIOVISUAL = "1",
    LITERATURE = "2",
    AUDIO = "3",
    EVENT = "4",
    EXPOSITION = "5",
    WORKSHOP = "152",
    PARTICIPATION = "163",
 */
enum ProductType {
  AudioVisual = 1,
  Livro = 2,
  Audio = 3,
  Evento = 4,
  Exposicao = 5,
  Oficina = 152,
  Participacao = 163,
}

type WhereType = {
  [key: string]: unknown
}

type Params = {
  category: string | string[]
  limit?: number
  where?: WhereType
}

export class FindAllProductsByCategory implements UseCase<unknown, IGetterProduct[]> {

  async configWhere(params: WhereType) {
    const mapWhere = new Map()
    Object.keys(params).map((key) => {
      if (!!params[key]) {
        mapWhere.set(key, params[key])
      }
    })

    return mapWhere
  }

  async config(params: Params) {
    const mapConfig = new Map()
    params.limit && mapConfig.set('limit', params.limit)

    return mapConfig
  }

  async categoriesInArray(params: Params): Promise<[boolean, number[]]> {
    const categoryArrayString = Array.isArray(params.category) ? params.category : [params.category]
    const categoryArrayInt = categoryArrayString.map((category) => parseInt(category, 10))

    const isInArray = Object.values(ProductType).some((type) =>
      categoryArrayInt.includes(parseInt(type.toString(), 10))
    )

    return [isInArray, categoryArrayInt]
  }

  async execute(_, params: Params): PromiseEither<IGetterProduct[], Error> {
    if (!params.category) {
      return right(new Error('Categoria é obrigatório'))
    }

    const mapConfig = await this.config(params)
    const mapWhere = await this.configWhere(params?.where || {})
    const [isInArray, categoryArrayInt] = await this.categoriesInArray(params)

    // id deve ser um ProductType
    if (!isInArray) {
      return right(new Error('Id deve ser uma categoria válida'))
    }

    const modelsProducts = await db.ModelInfoProducts.findAll({
      where: {
        [Op.or]: [
          ...categoryArrayInt.map((category) => ({
            category: category,
          })),
        ],
        active: true,
        ...Object.fromEntries(mapWhere),
      },
      ...Object.fromEntries(mapConfig),
      order: [['createdAt', 'ASC']],
      attributes: ['id', 'title', 'about', 'thumbnail', 'category', 'link', 'createdAt'],
    })

    const products = await Promise.all([
      ...modelsProducts.map((model) => {
        const product = model.get({ plain: true })

        return GetterProduct.build({
          id: product.id,
          title: product.title,
          about: product.about,
          thumbnail: product.thumbnail,
          category: product.category,
          createdAt: product.createdAt,
          link: product.link,
        } as IGetterProduct)
          .params()
      }),
    ])

    return left(products)
  }
}
