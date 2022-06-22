import { Router } from 'express'

import { adaptFileRoute } from '../../adapters'
import { makeGetPDFBooksComposer } from '../../composers/book-composers'

const Books = Router()

// Objeto que contém todas as rotas de produtos
export const PathBooks = {
  GET_PDF: '/books/pdf/:folder/:id',
}

// Adiciona a rota /pdf/:id para retornar um livro em formato PDF
Books.get(PathBooks.GET_PDF, adaptFileRoute(makeGetPDFBooksComposer()))

export default Books
