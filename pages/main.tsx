// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import { build } from '@/database'
import {
  FindAllNewestAudioVisual,
  FindAllPlaylistUseCase,
  FindAllProductsByCategory,
} from '@/domain/usecases'
import { GetStaticProps } from 'next/types'

import TemplateFrontEnd from '@/components/templates/frontend'
import HomeScreen from '@/screens/home-screen'

export default function App({ staticBooks, staticPlaylist, staticNewestProducts }) {
  return (
    <TemplateFrontEnd>
      <HomeScreen
        books={staticBooks}
        tvProgramsPlaylist={staticPlaylist}
        newestProducts={staticNewestProducts}
      />
    </TemplateFrontEnd>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  await build()
  const books = await new FindAllProductsByCategory().execute(
    {},
    {
      category: '2',
    }
  )

  const playlist = await new FindAllPlaylistUseCase().execute({})
  const newestProducts = await new FindAllNewestAudioVisual().execute(
    {},
    {
      category: ['1', '152'],
      limit: 10,
    }
  )

  return {
    props: {
      staticBooks: books.value,
      staticPlaylist: playlist.value,
      staticNewestProducts: newestProducts.value,
    },
    revalidate: 60 * 60 * 24,
  }
}
