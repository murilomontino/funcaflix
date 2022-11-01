/* eslint-disable react/prop-types */
// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import { FindAllBooksUseCase } from '@/domain/usecases'
import { build } from 'mapacultural-database'
import { GetStaticProps } from 'next/types'

import Loading from '@/components/atom/loading'
import ScreenBooks from '@/screens/books-screen'
import type { IGetterBooks } from '@/types/getters'

type Props = {
  books: IGetterBooks[]
}

export default function Literatura({ books }: Props) {

  if (!books) {
    return <Loading />
  }

  return <ScreenBooks books={books} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  await build()
  const booksOrErr = await new FindAllBooksUseCase().execute()

  return {
    props: {
      books: booksOrErr.isLeft() ? booksOrErr.extract() : [],
    },
    revalidate: 60 * 60 * 24,
  }
}
