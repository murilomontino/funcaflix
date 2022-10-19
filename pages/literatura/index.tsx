/* eslint-disable react/prop-types */
// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import { FindAllBooksUseCase } from '@/domain/usecases'
import { build } from 'mapacultural-database'
import { GetStaticProps } from 'next/types'

import Loading from '@/components/molecule/loading'
import ScreenBooks from '@/screens/books-screen'

export default function Literatura({ staticBooks }) {
  if (!staticBooks) {
    return <Loading />
  }

  return <ScreenBooks books={staticBooks} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  await build()
  const booksOrErr = await new FindAllBooksUseCase().execute()

  return {
    props: {
      staticBooks: booksOrErr.isLeft() ? booksOrErr.value : [],
    },
    revalidate: 60 * 60 * 24,
  }
}
