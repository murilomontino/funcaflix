import { GetterBook } from '@/domain/entities'
import promiseErrorHandler from '@/helpers/error-handler'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterBooks } from '@/types/getters'
import { database } from 'mapacultural-database'
import { QUERY_ALL_BOOKS } from './queries'
import { UseCase } from '../ports/use-case'

export class FindAllBooksUseCase implements UseCase<unknown, IGetterBooks[]> {
  async execute(): PromiseEither<IGetterBooks[], Error> {
    return await database.transaction(async (transaction) => {

      const [error, booksAndOptions] = await promiseErrorHandler(
        database.query(QUERY_ALL_BOOKS, { transaction })
      )

      if (error) return right(error)

      const books = booksAndOptions[0].map((book: IGetterBooks) => {
        return GetterBook
          .build(book)
          .params()
      })

      return left(books)
    })
  }
}
