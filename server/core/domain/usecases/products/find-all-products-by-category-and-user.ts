import { IProductsRepository } from '@/domain/repositories/products-repository/products-repository.interface'
import { isValidID } from '@/helpers'
import { Transform } from '@/helpers/decorators/transform'
import { left, PromiseEither, right } from '@/shared/either'
import { CATEGORIES } from '@/types/constants'
import { IGetterProduct } from '@/types/getters'

import { MissingParamError } from '../errors'
import { UseCase } from '../ports/use-case'

type Params = {
	idUser?: number
}

export class FindAllProductsByCategoryAndUser
	implements UseCase<unknown, IGetterProduct[]>
{
	constructor(
		private readonly _category: CATEGORIES,
		private readonly repository: IProductsRepository
	) { }

	get category(): CATEGORIES {
		return this._category
	}

	@Transform(Number, ['idUser'])
	async execute(_, params: Params): PromiseEither<IGetterProduct[], Error> {
		const { idUser } = params

		if (!isValidID(idUser)) {
			return right(new MissingParamError({ parameter: 'idUser' }))
		}

		const productsOrErr =
			await this.repository.findAllProductsByUserAndCategory(
				idUser,
				this.category
			)

		if (productsOrErr.isRight()) {
			return right(productsOrErr.value)
		}

		return left(productsOrErr.extract())
	}
}
