import React from 'react'

import {
  FindAllPlaylistAndItemsUseCase,
  FindAllTvProgramsUseCase,
  FindAllPlaylistUseCase
} from "@/domain/usecases"
import { build } from "mapacultural-database";
import type { GetStaticProps } from "next";

import AudioVisualScreen from "@/screens/programs-tv-screen";

const AudioVisual = ({ staticNewestVideos, staticPlaylist }) => {
  return <AudioVisualScreen newestItems={staticNewestVideos} playlist={staticPlaylist} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  await build()

  const findAllPlaylistAndItemsUseCase = new FindAllPlaylistAndItemsUseCase(
    new FindAllTvProgramsUseCase(),
    new FindAllPlaylistUseCase()
  )

  const promiseNewestVideosOrErr = new FindAllTvProgramsUseCase().execute(
    { subCategory: ['162', '161', '11', '12', '13', '42'] },
    { pageSize: '10' }
  )
  const promisePlaylistAndItemsOrErr = await findAllPlaylistAndItemsUseCase.execute({
    category: ['1'],
    subCategory: ['162', '161', '11', '12', '13', '42'],
  })

  const [newestVideosOrErr, playlistAndItemsOrErr] = await Promise.all([
    promiseNewestVideosOrErr,
    promisePlaylistAndItemsOrErr
  ])

  const newestVideos = newestVideosOrErr.isLeft() && newestVideosOrErr.extract()
  const playlistAndItems = playlistAndItemsOrErr.isLeft() && playlistAndItemsOrErr.extract()

  return {
    props: {
      staticNewestVideos: newestVideos || [],
      staticPlaylist: playlistAndItems || [],
    },
    revalidate: 60 * 60 * 24,
  }
}

export default AudioVisual
