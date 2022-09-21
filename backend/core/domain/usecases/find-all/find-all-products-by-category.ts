import { left, PromiseEither, right } from '@/shared/either'
import { IGetterProduct } from '@/types/getters'
import { db } from 'mapacultural-database'
import { Op } from 'sequelize'

import { UseCase } from '../ports/use-case'

enum ProductType {
  AudioVisual = 1,
  Livro = 2,
  Audio = 3,
  Evento = 4,
  Exposicao = 5,
}

type Params = {
  category: string | string[]
  limit?: number
}

export class FindAllProductsByCategory implements UseCase<unknown, IGetterProduct[]> {
  async execute(_, params: Params): PromiseEither<IGetterProduct[], Error> {
    if (!params.category) {
      return right(new Error('Categoria é obrigatório'))
    }

    const mapConfig = new Map()
    params.limit && mapConfig.set('limit', params.limit)

    const categoryArrayString = Array.isArray(params.category) ? params.category : [params.category]
    const categoryArrayInt = categoryArrayString.map((category) => parseInt(category, 10))

    const isInArray = Object.values(ProductType).some((type) =>
      categoryArrayInt.includes(parseInt(type.toString(), 10))
    )

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
      },
      ...Object.fromEntries(mapConfig),
      order: [['createdAt', 'ASC']],
      attributes: ['id', 'title', 'about', 'thumbnail', 'category', 'link', 'createdAt'],
    })

    const products = await Promise.all([
      ...modelsProducts.map((model) => {
        const product = model.get({ plain: true })

        return {
          id: product.id,
          title: product.title,
          about: product.about,
          thumbnail: product.thumbnail,
          category: product.category,
          createdAt: product.createdAt.toISOString(),
          link: product.link,
        } as IGetterProduct
      }),
    ])

    return left(products)
  }
}
