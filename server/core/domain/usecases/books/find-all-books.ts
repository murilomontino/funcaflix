import { BookRepository } from '@/domain/repositories/books-repository/book.interface'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterBooks } from '@/types/getters'

import { UseCase } from '../ports/use-case'

export class FindAllBooksUseCase implements UseCase<unknown, IGetterBooks[]> {
	constructor(private readonly repository: BookRepository) { }

	async execute(): PromiseEither<IGetterBooks[], Error> {
		const booksOrErr = await this.repository.findAll()

		if (booksOrErr.isRight()) {
			return right(booksOrErr.value)
		}

		const books = booksOrErr.value.map((book) => book.params())

		return left(books)
	}
}
