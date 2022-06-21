import { DbModels } from '@mapa-cultural/database/types/source/models/types'

import { SetterDocumentsProducts } from '@/domain/entities/setters/setter-documents'
import { SequelizeInsert } from '@/domain/repositories/ports-repositories/sequelize-insert'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterDocProduct } from '@/types/getters'
import { IDocumentsProducts } from '@/types/setters'

import { UseCase } from '../ports/use-case'

export class InsertDocProductUseCase
	implements UseCase<IDocumentsProducts, IGetterDocProduct>
{
	constructor(
		private readonly repository: SequelizeInsert<
			DbModels.ModelDocsProducts,
			IDocumentsProducts,
			IGetterDocProduct
		>
	) {}

	async execute(
		body: IDocumentsProducts
	): PromiseEither<IGetterDocProduct, Error> {
		const docOrErr = await SetterDocumentsProducts.create(body)

		if (docOrErr.isRight()) return right(docOrErr.value)

		const insertOrErr = await this.repository.run(docOrErr.value)

		if (insertOrErr.isRight()) return right(insertOrErr.value)

		return left(insertOrErr.value.params())
	}
}
