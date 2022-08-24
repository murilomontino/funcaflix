/* eslint-disable react/prop-types */
// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import { FindAllProductsByCategory } from '@/domain/usecases'
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
  const books = await new FindAllProductsByCategory().execute(null, {
    category: '2',
  })
  return {
    props: {
      staticBooks: books.value,
    },
    revalidate: 60 * 60 * 24,
  }
}
