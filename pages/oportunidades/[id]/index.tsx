import React from 'react'

import { FindAllOpportunities, FindByPKOpportunities } from '@/domain/usecases'
import { build } from 'mapacultural-database'
import { GetStaticProps } from 'next/types'

const OpportunitiesId = ({ staticOpportunity }) => {
  if (!staticOpportunity) {
    return <div>Loading...</div>
  }

  return <>{JSON.stringify(staticOpportunity, null, 2)}</>
}

export default OpportunitiesId

export const getStaticPaths = async () => {
  await build()

  const opportunities = await new FindAllOpportunities().execute()

  if (opportunities.isRight()) {
    return {
      paths: [],
      fallback: false,
    }
  }

  const paths = opportunities.value.map((opportunity) => ({
    params: { id: opportunity.id?.toString() || '-1' },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await build()

  if (!params?.id) {
    return {
      props: {
        staticOpportunity: null,
      },
    }
  }
  const opportunityEither = await new FindByPKOpportunities().execute(null, {
    id: params.id?.toString(),
  })

  const opportunity = opportunityEither.isLeft() ? opportunityEither.value : {}

  return {
    props: {
      staticOpportunity: opportunity,
    },
    revalidate: 60 * 60 * 24,
  }
}
