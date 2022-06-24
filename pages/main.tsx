// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import { build } from '@/database'
import { FindAllPlaylistTVProgramsUseCase, FindAllProductsByCategory } from '@/domain/usecases'
import { GetStaticProps } from 'next/types'

import Loading from '@/components/molecule/loading'
import TemplateFrontEnd from '@/components/templates/frontend'
import HomeScreen from '@/screens/home-screen'

export default function App({ staticBooks, staticPlaylist }) {
  if (!staticBooks || !staticPlaylist) {
    return <Loading />
  }
  return (
    <TemplateFrontEnd>
      <HomeScreen items={staticBooks} tvProgramsPlaylist={staticPlaylist} />
    </TemplateFrontEnd>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  await build()
  const books = await new FindAllProductsByCategory().execute(null, {
    category: '2',
  })

  const playlist = await new FindAllPlaylistTVProgramsUseCase().execute()

  return {
    props: {
      staticBooks: books.value,
      staticPlaylist: playlist.value,
    },
    revalidate: 60 * 60 * 24,
  }
}
