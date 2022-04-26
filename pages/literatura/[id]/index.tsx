import React from 'react'

import { useRouter } from 'next/router'

import TemplateFrontEnd from '@/components/templates/frontend'
import ScreenBookID from '@/screens/book-id-screen'

const Id = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <TemplateFrontEnd>
      <ScreenBookID id={id?.toString()} />
    </TemplateFrontEnd>
  )
}

export default Id
