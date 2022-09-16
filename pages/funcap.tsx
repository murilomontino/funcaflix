// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import { GetterProjects } from '@/domain/entities'
import {
  FindAllNewestAudioVisual,
  FindAllPlaylistUseCase,
  FindAllProductsByCategory,
} from '@/domain/usecases'
import { build } from 'backend/database'
import { db } from 'backend/database'
import { GetStaticProps } from 'next/types'

import ComingSoon from '@/screens/coming-soon-screen'
import HomeScreen from '@/screens/home-screen'

const EM_BREVE = false

export default function App({
  staticBooks,
  staticPlaylist,
  staticNewestProducts,
  staticOpportunities,
}) {
  if (EM_BREVE) {
    return <ComingSoon />
  }

  return (
    <HomeScreen
      books={staticBooks}
      newestProducts={staticNewestProducts}
      tvProgramsPlaylist={staticPlaylist}
      opportunities={staticOpportunities}
    />
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  await build()

  const books = (
    await new FindAllProductsByCategory().execute(
      {},
      {
        category: '2',
      }
    )
  ).value

  const playlist = !process.env.ELECTION_PERIOD
    ? (await new FindAllPlaylistUseCase().execute({})).value
    : []
  const newestProducts = !process.env.ELECTION_PERIOD
    ? (
        await new FindAllNewestAudioVisual().execute(
          {},
          {
            category: ['1', '152'],
            limit: 10,
          }
        )
      ).value
    : []

  const newestProjects = await db.ModelProject.findAll({
    where: {
      status: [1],
    },

    order: [['dateStart', 'DESC']],
  })

  const mapProjects = newestProjects.map((project) => GetterProjects.build(project.get()).params())

  return {
    props: {
      staticBooks: books,
      staticPlaylist: playlist,
      staticNewestProducts: newestProducts,
      staticOpportunities: mapProjects,
    },
    revalidate: 60 * 60 * 24,
  }
}
