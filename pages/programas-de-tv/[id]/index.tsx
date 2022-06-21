import React from 'react'

import { useRouter } from 'next/router'

import TemplateFrontEnd from '@/components/templates/frontend'
import DetailsScreen from '@/screens/details-movies-screen'

const ProgramsTvID = () => {
  const { id } = useRouter().query

  return (
    <TemplateFrontEnd>
      <DetailsScreen id={id} />
    </TemplateFrontEnd>
  )
}

export default ProgramsTvID
