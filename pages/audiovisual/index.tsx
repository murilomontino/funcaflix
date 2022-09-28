// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import {
  FindAllPlaylistAndItemsUseCase,
  FindAllPlaylistUseCase,
  FindAllTvProgramsUseCase,
} from '@/domain/usecases'
import { build } from 'mapacultural-database'
import { GetStaticProps } from 'next/types'

import Loading from '@/components/molecule/loading'
import ProgramsTVScreen from '@/screens/programs-tv-screen'

export default function AudioVisual({ staticNewestVideos, staticPlaylist }) {
  if (!staticNewestVideos || !staticPlaylist) {
    return <Loading />
  }

  return <ProgramsTVScreen newestItems={staticNewestVideos} playlist={staticPlaylist} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  await build()
  const findAllPlaylistAndItemsUseCase = new FindAllPlaylistAndItemsUseCase(
    new FindAllTvProgramsUseCase(),
    new FindAllPlaylistUseCase()
  )

  const newestVideos = await new FindAllTvProgramsUseCase().execute(
    { subCategory: ['162', '161', '11', '12', '13', '42'] },
    { pageSize: '10' }
  )
  const playlistAndItemsEither = await findAllPlaylistAndItemsUseCase.execute({
    category: ['1'],
    subCategory: ['162', '161', '11', '12', '13', '42'],
  })

  if (process.env.ELECTION_PERIOD || playlistAndItemsEither.isRight() || newestVideos.isRight()) {
    return {
      props: {
        playlist: [],
        newestItems: [],
      },
      revalidate: 60 * 60 * 24,
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
