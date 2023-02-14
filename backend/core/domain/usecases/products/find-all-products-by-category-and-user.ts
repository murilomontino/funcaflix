import { left, PromiseEither, right } from '@/shared/either'
import { IGetterProduct } from '@/types/getters'

import { CATEGORIES } from '@/types/constants'
import { UseCase } from '../ports/use-case'

import { IProductsRepository } from '@/domain/repositories/products-repository/products-repository.interface'
import { MissingParamError } from '../errors'

type Params = {
  idUser?: number
}

export class FindAllProductsByCategoryAndUser implements UseCase<unknown, IGetterProduct[]> {

  constructor(
    private readonly _category: CATEGORIES,
    private readonly repository: IProductsRepository,
  ) { }

  get category(): CATEGORIES {
    return this._category
  }

  async execute(_, params: Params): PromiseEither<IGetterProduct[], Error> {
    const { idUser } = params

    if (!idUser) {
      return right(new MissingParamError({ parameter: 'idUser' }))
    }

    const productsOrErr = await this.repository.findAllProductsByUserAndCategory(
      idUser, this.category
    )

    if (productsOrErr.isRight()) {
      return right(productsOrErr.value)
    }

    return left(productsOrErr.extract())
  }
}
