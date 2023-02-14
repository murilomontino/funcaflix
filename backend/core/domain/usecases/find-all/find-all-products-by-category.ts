import { left, PromiseEither, right } from '@/shared/either'
import { IGetterProduct } from '@/types/getters'
import { db } from 'mapacultural-database'
import { Op } from 'sequelize'

import { GetterProduct } from '@/domain/entities'
import { CATEGORIES } from '@/types/constants'
import { UseCase } from '../ports/use-case'

import { MissingParamError } from '../errors'
import { CategoryInvalidError } from '../errors/category-invalid'
import {
  categoriesInArray,
  config,
  configWhere,
  Params,
} from './config-products-params'

export class FindAllProductsByCategory implements UseCase<unknown, IGetterProduct[]> {

  constructor(
    private readonly categoryDefault: CATEGORIES = null,
  ) { }

  async execute(_, params: Params): PromiseEither<IGetterProduct[], Error> {

    if (!params.category && !this.categoryDefault) {
      return right(new MissingParamError({ parameter: 'category' }))
    }

    const mapConfig = await config(params)
    const mapWhere = await configWhere(params)
    const [isInArray, categoryArrayInt] = await categoriesInArray(params.category, this.categoryDefault)

    // id deve ser um EnumCategory
    if (!isInArray) {
      return right(new CategoryInvalidError({ category: params.category }))
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
