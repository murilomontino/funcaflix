// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import { fetchNewestVideosAsync, fetchPlaylistItemsAsync } from '@/api/fetch-tv-programs'

import Loading from '@/components/molecule/loading'
import TemplateFrontEnd from '@/components/templates/frontend'
import ProgramsTVScreen from '@/screens/programs-tv-screen'

export default function App() {
  const { data: newestVideos, isLoading: isLoadingNewest } = fetchNewestVideosAsync()
  const { data: playlist, isLoading: isLoadingPlaylist } = fetchPlaylistItemsAsync()

  if (isLoadingNewest || isLoadingPlaylist) {
    return <Loading />
  }

  return (
    <TemplateFrontEnd>
      <ProgramsTVScreen newestItems={newestVideos} playlist={playlist} />
    </TemplateFrontEnd>
  )
}
