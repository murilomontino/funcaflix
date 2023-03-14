import { GetterBook } from '@/domain/entities'
import promiseErrorHandler from '@/helpers/error-handler'
import { PromiseEither, left, right } from '@/shared/either'
import { database } from 'mapacultural-database'

import { BookRepository } from './book.interface'
import { QUERY_ALL_BOOKS, QUERY_GETTER_ID_BOOK } from './queries'

export class BookRepositorySequelize implements BookRepository {
	findAll(): PromiseEither<GetterBook[], Error> {
		return database.transaction(async (transaction) => {
			const [error, queryResult] = await promiseErrorHandler(
				database.query(QUERY_ALL_BOOKS, { transaction })
			)

			if (error) {
				return right(error)
			}

			const books = queryResult[0].map((item: any) => GetterBook.build(item))

			return left(books)
		})
	}

	findById(id: string): PromiseEither<GetterBook, Error> {
		return database.transaction(async (transaction) => {
			const [error, queryResult] = await promiseErrorHandler(
				database.query(QUERY_GETTER_ID_BOOK(id), { transaction })
			)

			if (error) {
				return right(error)
			}

			const [book] = queryResult[0]

			return left(GetterBook.build(book as any))
		})
	}
}
