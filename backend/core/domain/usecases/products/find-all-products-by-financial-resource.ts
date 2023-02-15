import { left, PromiseEither, right } from '@/shared/either'
import { IGetterProduct } from '@/types/getters'

import { UseCase } from '../ports/use-case'

import { IProductsRepository } from '@/domain/repositories/products-repository/products-repository.interface'
import { isValid } from '@/helpers'
import { CATEGORIES } from '@/types/constants'
import { MissingParamError } from '../errors'

type Params = {
  financialResource?: number
}

export class FindAllProductsByFinancialResource implements UseCase<unknown, IGetterProduct[]> {

  constructor(
    private readonly repository: IProductsRepository,
    private category?: CATEGORIES
  ) { }

  defineCategory(category: CATEGORIES) {
    this.category = category
    return this
  }

  async execute(_, params: Params): PromiseEither<IGetterProduct[], Error> {
    const { financialResource } = params

    if (!isValid(financialResource)) {
      return right(new MissingParamError({ parameter: 'financialResource' }))
    }

    if (!isValid(this.category)) {
      return right(new MissingParamError({ parameter: 'category' }))
    }

    const productsOrErr = await this.repository.findAllByFinancialResourceAndCategory(financialResource, this.category)

    if (productsOrErr.isRight()) {
      return right(productsOrErr.value)
    }

    return left(productsOrErr.extract())
  }
}
