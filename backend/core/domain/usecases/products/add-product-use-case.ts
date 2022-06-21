import { GetterProduct } from '@/domain/entities'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterProduct } from '@/types/getters'
import { IProduct } from '@/types/setters'

import { InsertProductUseCase } from '../inserts'
import { UseCase } from '../ports/use-case'

export class AddProductBookUseCase
	implements UseCase<IProduct, IGetterProduct>
{
	constructor(private readonly insertProductUseCase: InsertProductUseCase) {}

	async execute(body: IProduct): PromiseEither<IGetterProduct, Error> {
		const productOrErr = await this.insertProductUseCase.execute(body)

		if (productOrErr.isRight()) return right(productOrErr.value)

		const getterProduct = new GetterProduct().build(productOrErr.value)

		return left(getterProduct)
	}
}
