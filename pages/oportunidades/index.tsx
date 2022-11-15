// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import { FindAllOpportunities } from '@/domain/usecases'
import { build } from 'mapacultural-database'
import { GetStaticProps } from 'next/types'

import OpportunitiesScreen from '@/screens/opportunities-screen'

import { GetterProjects } from '../../backend/core/domain/entities'

type Props = {
  opportunities: GetterProjects[]
}

export default function Opportunities({ opportunities = [] }: Props) {
  return <OpportunitiesScreen opportunities={opportunities} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  await build()

  const opportunities = await new FindAllOpportunities().execute(null)

  return {
    props: {
      opportunities: opportunities.isRight() ? [] : opportunities.value,
    },
    revalidate: 60 * 60 * 24,
  }
}
