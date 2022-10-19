import { GetterBook } from '@/domain/entities'
import { left, PromiseEither } from '@/shared/either'
import { IGetterBooks } from '@/types/getters'
import { db, database } from 'mapacultural-database'

import { UseCase } from '../ports/use-case'

export class FindAllBooksUseCase implements UseCase<unknown, IGetterBooks[]> {
  async execute(): PromiseEither<IGetterBooks[], Error> {
    return await database.transaction(async (transaction) => {
      const booksModels = await db.ModelBooks.findAll({
        transaction
      })

      const books = await Promise.all([
        ...booksModels.map(async (model) => {
          const book = model.get({ plain: true })


          const pdfModel = await db.ModelDocsProducts.findOne({
            where: {
              idProduct: book.idProduct,
              type: 10
            }
          })

          const thumbnailModel = await db.ModelDocsProducts.findOne({
            where: {
              idProduct: book.idProduct,
              type: 104
            }
          })

          const thumbnail = thumbnailModel?.get({ plain: true }).file
          const pdf = pdfModel?.get({ plain: true }).file


          return GetterBook
            .build(book)
            .defineThumbnail(thumbnail)
            .definePdf(pdf)
            .params()
        }),
      ])

      return left(books)
    })

  }
}
