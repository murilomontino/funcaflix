/* eslint-disable react/prop-types */
// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import { GetterBooks } from '@/types'

import TemplateFrontEnd from '@/components/templates/frontend'
import ScreenBooks from '@/screens/books-screen'

import api from '@/services'
import { Getter } from '@/services/config/types'

export default function Livros({ books }) {
  return (
    <TemplateFrontEnd>
      <ScreenBooks books={books} />
    </TemplateFrontEnd>
  )
}

export const getStaticProps = async (ctx) => {
  const { data } = await api.get<Getter<GetterBooks[]>>('books')
  if (data.statusCode === 200) {
    return {
      unstable_revalidate: 100,
      props: {
        books: data.data,
      },
    }
  }
  return {
    unstable_revalidate: 100,
    props: {
      books: [],
    },
  }
}
