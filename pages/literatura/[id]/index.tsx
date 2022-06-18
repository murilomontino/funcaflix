import React from 'react'

import { fetchBookByIDAsync } from '@/api/fetch-book'
import { useRouter } from 'next/router'

import TemplateFrontEnd from '@/components/templates/frontend'
import ScreenBookID from '@/screens/book-id-screen'

type book = {
  [key: string]: any
  pdf: string
}

const LiteraturaId = () => {
  const router = useRouter()
  const { id } = router.query

  const { data, isLoading, error } = fetchBookByIDAsync(id)

  if (isLoading) return null

  return (
    <TemplateFrontEnd>
      <ScreenBookID book={data} />
    </TemplateFrontEnd>
  )
}

export default LiteraturaId
