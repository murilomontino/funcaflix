// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import { fetchPlaylistAsync } from '@/api/fetch-tv-programs'

import Loading from '@/components/molecule/loading'
import TemplateFrontEnd from '@/components/templates/frontend'
import ProgramsTVScreen from '@/screens/programs-tv-screen'

export default function App() {
  const { data: playlists, isLoading } = fetchPlaylistAsync()

  if (isLoading) {
    return <Loading />
  }

  return (
    <TemplateFrontEnd>
      <ProgramsTVScreen />
    </TemplateFrontEnd>
  )
}
