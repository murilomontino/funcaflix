// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import {
  FindAllNewestAudioVisual,
  FindAllPlaylistUseCase,
  FindAllProductsByCategory,
} from '@/domain/usecases'
import { GetStaticProps } from 'next/types'

import ComingSoon from '@/screens/coming-soon-screen'
import HomeScreen from '@/screens/home-screen'

const EM_BREVE = false

export default function App({ staticBooks, staticPlaylist, staticNewestProducts }) {
  if (EM_BREVE) {
    return <ComingSoon />
  }

  return (
    <HomeScreen
      books={staticBooks}
      newestProducts={staticNewestProducts}
      tvProgramsPlaylist={staticPlaylist}
    />
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
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

  return {
    props: {
      staticBooks: books,
      staticPlaylist: playlist,
      staticNewestProducts: newestProducts,
    },
    revalidate: 60 * 60 * 24,
  }
}
