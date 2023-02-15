import { GetterBook } from '@/domain/entities'
import promiseErrorHandler from '@/helpers/error-handler'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterBooks } from '@/types/getters'
import assert from 'assert'
import { database } from 'mapacultural-database'

import { UseCase } from '../ports/use-case'
import { QUERY_GETTER_ID_BOOK } from './queries'

type FindOneBookByIdProductProps = {
  id: string
}

export class FindOneBookByIdProductUseCase implements UseCase<FindOneBookByIdProductProps, IGetterBooks> {

  async execute(_, params: FindOneBookByIdProductProps): PromiseEither<IGetterBooks, Error> {
    assert(params.id, 'id is required')

    const id = parseInt(params.id)

    return database.transaction(async (transaction) => {


      const [error, bookAndOptions] = await promiseErrorHandler(
        database.query(QUERY_GETTER_ID_BOOK(id), { transaction })
      )

      if (error) return right(error)

      const book = bookAndOptions[0][0] as IGetterBooks


      return left(
        GetterBook
          .build(book)
          .params()
      )
    })
  }
}
