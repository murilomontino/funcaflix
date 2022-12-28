import { GetterBook } from '@/domain/entities';
import { BookRepository } from './book.interface'
import { PromiseEither, left, right } from '@/shared/either';

import { QUERY_ALL_BOOKS } from './queries'
import { database } from 'mapacultural-database';
import promiseErrorHandler from '@/helpers/error-handler';

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
        throw new Error('Method not implemented.');
    }

}