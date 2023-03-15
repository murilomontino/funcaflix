import { BookRepository } from '@/domain/repositories/books-repository/book.interface'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterBooks } from '@/types/getters'
import assert from 'assert'

import { UseCase } from '../ports/use-case'

type FindOneBookByIdProductProps = {
	id: string
}

export class FindOneBookByIdProductUseCase
	implements UseCase<FindOneBookByIdProductProps, IGetterBooks>
{
	constructor(private readonly repository: BookRepository) { }

	async execute(
		_,
		params: FindOneBookByIdProductProps
	): PromiseEither<IGetterBooks, Error> {
		assert(params.id, 'id is required')

		const bookOrErr = await this.repository.findById(params.id)

		if (bookOrErr.isRight()) {
			return right(bookOrErr.value)
		}

		const book = bookOrErr.value.params()

		return left(book)
	}
}
