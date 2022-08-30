// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import {
  FindAllPlaylistAndItemsUseCase,
  FindAllPlaylistUseCase,
  FindAllTvProgramsUseCase,
} from '@/domain/usecases'
import { build } from 'backend/database'
import { GetStaticProps } from 'next/types'

import ProgramsTVScreen from '@/screens/programs-tv-screen'

export default function ProgramsTV({ staticNewestVideos, staticPlaylist }) {
  return <ProgramsTVScreen newestItems={staticNewestVideos} playlist={staticPlaylist} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  await build()

  const findAllPlaylistAndItemsUseCase = new FindAllPlaylistAndItemsUseCase(
    new FindAllTvProgramsUseCase(),
    new FindAllPlaylistUseCase()
  )

  const newestVideos = await new FindAllTvProgramsUseCase().execute(
    { subCategory: ['152'] },
    { pageSize: '10' }
  )
  const playlistAndItemsEither = await findAllPlaylistAndItemsUseCase.execute({
    category: ['152'],
    subCategory: ['152'],
  })

  if (process.env.ELECTION_PERIOD || playlistAndItemsEither.isRight() || newestVideos.isRight()) {
    return {
      props: {
        playlist: [],
        newestItems: [],
      },
      revalidate: 60,
    }
  }
  return {
    props: {
      staticNewestVideos: newestVideos.value,
      staticPlaylist: playlistAndItemsEither.value,
    },
    revalidate: 60 * 60 * 24,
  }
}
