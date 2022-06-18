/* eslint-disable react/prop-types */
// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import { fetchProductByCategoryAsync } from '@/api/fetch-product'

import Loading from '@/components/molecule/loading'
import TemplateFrontEnd from '@/components/templates/frontend'
import ScreenBooks from '@/screens/books-screen'

export default function Literatura() {
  const { data, isLoading } = fetchProductByCategoryAsync(2)

  if (isLoading) {
    return <Loading />
  }

  return (
    <TemplateFrontEnd>
      <ScreenBooks books={data} />
    </TemplateFrontEnd>
  )
}
