// @generated: @expo/next-adapter@2.1.52
import { FindAllOpportunities } from '@/domain/usecases'
import { build } from 'mapacultural-database'
import { GetStaticProps } from 'next/types'
import React from 'react'

import OpportunitiesScreen from '@/screens/opportunities-screen'

import { GetterProjects } from '../../server/core/domain/entities'

type Props = {
  opportunities: GetterProjects[]
}

export default function Opportunities({ opportunities = [] }: Props) {
  return <React.Fragment> <OpportunitiesScreen opportunities={opportunities} /> </React.Fragment>
}

export const getStaticProps: GetStaticProps = async (context) => {
  await build()

  const opportunitiesOrErr = await new FindAllOpportunities().execute({ status: [1, 2] })
  const opportunities = opportunitiesOrErr.isLeft() && opportunitiesOrErr.extract()

  return {
    props: {
      opportunities: opportunities || [],
    },
    revalidate: 60 * 60 * 24,
  }
}
