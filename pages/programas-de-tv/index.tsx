// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import {
  FindAllPlaylistAndItemsUseCase,
  FindAllTvProgramsUseCase,
  FindAllPlaylistUseCase
} from "@/domain/usecases"
import { build } from "mapacultural-database";
import type { GetStaticProps } from "next";

import ProgramsTVScreen from "@/screens/programs-tv-screen";

const ProgramsTV = ({ staticNewestVideos, staticPlaylist }) => {
  return <ProgramsTVScreen newestItems={staticNewestVideos} playlist={staticPlaylist} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  await build()

  const findAllPlaylistAndItemsUseCase = new FindAllPlaylistAndItemsUseCase(
    new FindAllTvProgramsUseCase(),
    new FindAllPlaylistUseCase()
  )

  const promiseNewestVideosOrErr = new FindAllTvProgramsUseCase().execute(
    { subCategory: ['152'] },
    { pageSize: '10' }
  )
  const promisePlaylistAndItemsOrErr = findAllPlaylistAndItemsUseCase.execute({
    category: ['152'],
    subCategory: ['152'],
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

export default ProgramsTV