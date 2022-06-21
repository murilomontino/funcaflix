import { DbModels } from '@mapa-cultural/database/types/source/models/types'

import { SetterInfoProduct } from '@/domain/entities'
import { SequelizeInsert } from '@/domain/repositories/ports-repositories/sequelize-insert'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterProduct } from '@/types/getters'
import { IProduct } from '@/types/setters'

import { UseCase } from '../ports/use-case'

export class InsertProductUseCase implements UseCase<IProduct, IGetterProduct> {
	constructor(
		private readonly repository: SequelizeInsert<
			DbModels.ModelInfoProducts,
			IProduct,
			IGetterProduct
		>
	) {}

	async execute(body: IProduct): PromiseEither<IGetterProduct, Error> {
		const productOrErr = await SetterInfoProduct.create(body)

		if (productOrErr.isRight()) return right(productOrErr.value)

		const insertOrErr = await this.repository.run(productOrErr.value)

		if (insertOrErr.isRight()) return right(insertOrErr.value)

		return left(insertOrErr.value.params())
	}
}
