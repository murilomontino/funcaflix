import { Router } from 'express'

import { adaptFileRoute, adaptRoute } from '../../adapters'
import {
  makeGetPDFBooksComposer,
  makeGetBookByIDComposer,
  makeGetBooksComposer,
} from '../../composers/book-composers'

const Books = Router()

// Objeto que contém todas as rotas de produtos
export const PathBooks = {
  GET_PDF: '/books/pdf/:id',
  GET_BOOK_BY_ID: '/books/:id',
  GET_BOOKS: '/books'
}

Books.get(PathBooks.GET_BOOK_BY_ID, adaptRoute(makeGetBookByIDComposer()))

Books.get(PathBooks.GET_PDF, adaptFileRoute(makeGetPDFBooksComposer()))

Books.get(PathBooks.GET_BOOKS, adaptRoute(makeGetBooksComposer()))

export default Books
