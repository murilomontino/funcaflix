// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import { fetchProductByCategoryAsync } from '@/api/fetch-product'
import { fetchPlaylistAsync } from '@/api/fetch-tv-programs'

import Loading from '@/components/molecule/loading'
import TemplateFrontEnd from '@/components/templates/frontend'
import HomeScreen from '@/screens/home-screen'

export default function App() {
  const { data: books, isLoading: isBookLoading } = fetchProductByCategoryAsync(2)
  const { data: playlists, isLoading: isPlaylistLoading } = fetchPlaylistAsync()

  if (isBookLoading || isPlaylistLoading) {
    return <Loading />
  }

  return (
    <TemplateFrontEnd>
      <HomeScreen items={books} tvProgramsPlaylist={playlists} />
    </TemplateFrontEnd>
  )
}
