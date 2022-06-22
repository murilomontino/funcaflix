import React from 'react'

import { FindOneBookByIdProductUseCase, FindAllProductsByCategory } from '@/domain/usecases'
import { build } from '@mapa-cultural/database'
import { GetStaticProps } from 'next/types'

import TemplateFrontEnd from '@/components/templates/frontend'
import ScreenBookID from '@/screens/book-id-screen'

const LiteraturaId = ({ staticBook }) => {
  return (
    <TemplateFrontEnd>
      <ScreenBookID book={staticBook} />
    </TemplateFrontEnd>
  )
}

export default LiteraturaId

export const getStaticPaths = async () => {
  await build()
  const books = await new FindAllProductsByCategory().execute(null, {
    category: '2',
  })

  if (books.isRight()) {
    return {
      paths: [],
      fallback: false,
    }
  }

  const paths = books.value.map((book) => ({
    params: { id: book.id.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await build()
  const bookEither = await new FindOneBookByIdProductUseCase().execute(null, {
    id: params.id.toString(),
  })

  const book = bookEither.isLeft ? bookEither.value : null

  return {
    props: {
      staticBook: book,
    },
    revalidate: 60 * 60 * 24 * 365,
  }
}
