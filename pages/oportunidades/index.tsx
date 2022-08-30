// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import { build, db } from 'backend/database'
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

  const newestProjects = await db.ModelProject.findAll({
    where: {
      status: [1],
    },

    order: [['dateStart', 'DESC']],
  })

  const mapProjects = newestProjects.map((project) =>
    new GetterProjects().build(project.get()).params()
  )

  return {
    props: {
      opportunities: mapProjects,
    },
    revalidate: 60 * 60 * 24,
  }
}
