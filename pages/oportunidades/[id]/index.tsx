import React from 'react'

import { FindOneBookByIdProductUseCase, FindAllProductsByCategory } from '@/domain/usecases'
import { build } from 'backend/database'
import { GetStaticProps } from 'next/types'

const OpportunitiesId = ({ staticBook }) => {
  if (!staticBook) {
    return <div>Loading...</div>
  }

  return <>{JSON.stringify(staticBook)}</>
}

export default OpportunitiesId

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
    params: { id: book.id?.toString() || -1 },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await build()

  if (!params?.id) {
    return {
      props: {
        staticBook: null,
      },
    }
  }
  const bookEither = await new FindOneBookByIdProductUseCase().execute(null, {
    id: params.id?.toString(),
  })
  const book = bookEither.isLeft() ? bookEither.value : null

  return {
    props: {
      staticBook: book,
    },
    revalidate: 60 * 60 * 24,
  }
}
