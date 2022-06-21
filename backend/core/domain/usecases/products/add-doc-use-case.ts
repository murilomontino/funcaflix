import { GetterDocProduct } from '@/domain/entities'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterDocProduct } from '@/types/getters'
import { IDocumentsProducts } from '@/types/setters'

import { InsertDocProductUseCase } from '../inserts'
import { UseCase } from '../ports/use-case'

export class AddProductBookUseCase
	implements UseCase<IDocumentsProducts, IGetterDocProduct>
{
	constructor(private readonly insertProductUseCase: InsertDocProductUseCase) {}

	async execute(
		body: IGetterDocProduct
	): PromiseEither<IGetterDocProduct, Error> {
		const docOrErr = await this.insertProductUseCase.execute(body)

		if (docOrErr.isRight()) return right(docOrErr.value)

		const getterDoc = new GetterDocProduct().build(docOrErr.value)

		return left(getterDoc)
	}
}
