import { left, PromiseEither, right } from '@/shared/either'
import { IProductBook } from '@/types/product/book'

import {
	InsertBookUseCase,
	InsertDatasheetUseCase,
	InsertDocProductUseCase,
	InsertProductUseCase,
} from '../inserts'
import { UseCase } from '../ports/use-case'

export class AddProductBookUseCase
	implements UseCase<IProductBook, IProductBook>
{
	constructor(
		private readonly insertProductUseCase: InsertProductUseCase,
		private readonly insertBookUseCase: InsertBookUseCase,
		private readonly insertDatasheetUseCase: InsertDatasheetUseCase,
		private readonly insertDocProductUseCase: InsertDocProductUseCase
	) {}

	async execute(body: IProductBook): PromiseEither<IProductBook, Error> {
		const productOrErr = await this.insertProductUseCase.execute(body)

		if (productOrErr.isRight()) return right(productOrErr.value)

		const docOrErr = await this.insertDocProductUseCase.execute({
			...body,
			idProduct: productOrErr.value.id,
		})

		if (docOrErr.isRight()) return right(docOrErr.value)

		const bookOrErr = await this.insertBookUseCase.execute({
			...body,
			author: body.culturalName,
			idDocument: docOrErr.value.id,
		})

		if (bookOrErr.isRight()) return right(bookOrErr.value)

		return left(body)
	}
}
