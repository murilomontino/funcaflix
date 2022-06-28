// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import { build } from '@/database'
import {
  FindAllPlaylistAndItemsUseCase,
  FindAllPlaylistUseCase,
  FindAllTvProgramsUseCase,
} from '@/domain/usecases'
import { GetStaticProps } from 'next/types'

import Loading from '@/components/molecule/loading'
import TemplateFrontEnd from '@/components/templates/frontend'
import ProgramsTVScreen from '@/screens/programs-tv-screen'

export default function AudioVisual({ staticNewestVideos, staticPlaylist }) {
  if (!staticNewestVideos || !staticPlaylist) {
    return <Loading />
  }

  return (
    <TemplateFrontEnd>
      <ProgramsTVScreen newestItems={staticNewestVideos} playlist={staticPlaylist} />
    </TemplateFrontEnd>
  )
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

  if (playlistAndItemsEither.isRight() || newestVideos.isRight()) {
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
