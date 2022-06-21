import { GetterBook } from '@/domain/entities'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterBooks } from '@/types/getters'
import { database, db } from '@mapa-cultural/database'

import { UseCase } from '../ports/use-case'

type Params = {
  id: string
}

export class FindOneBookByIdProductUseCase implements UseCase<unknown, IGetterBooks> {
  async execute(_, params: Params): PromiseEither<IGetterBooks, Error> {
    if (!params.id) {
      return right(new Error('Id é obrigatório'))
    }
    const id = parseInt(params.id)

    return database.transaction(async (transaction) => {
      const promiseDoc = db.ModelDocsProducts.findOne({
        where: {
          idProduct: id,
          type: 10,
        },
        transaction,
      })

      const promiseThumbnail = db.ModelDocsProducts.findOne({
        where: {
          idProduct: id,
          type: 104,
        },
        transaction,
      })

      const promiseBook = db.ModelBooks.findOne({
        where: {
          idProduct: id,
        },
        transaction,
      })

      const [docModel, thumbnailModel, bookModel] = await Promise.all([
        promiseDoc,
        promiseThumbnail,
        promiseBook,
      ])

      if (!bookModel) {
        return right(new Error('Livro não encontrado'))
      }

      const doc = docModel?.get()
      const thumbnail = thumbnailModel?.get()
      const book = bookModel.get()

      return left(
        new GetterBook().build({
          author: book.author,
          dimensions: book.dimensions,
          genres: book.genres,
          id: book.id,
          idDocument: doc.id,
          pdf: doc?.filePath || 'Não disponível',
          thumbnail: thumbnail?.filePath || 'Não Informado',
          illustration: book.illustration,
          isbn: book.isbn,
          illustrator: book.illustrator,
          numberOfPages: book.numberOfPages,
          publicationDate: book.publicationDate,
          publisher: book.publisher,
          subTitle: book.subTitle,
          synopsis: book.synopsis,
          tags: book.tags,
          title: book.title,
        })
      )
    })
  }
}
