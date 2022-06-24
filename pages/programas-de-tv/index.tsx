// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import { build } from '@/database'
import {
  FindAllPlaylistAndItemsUseCase,
  FindAllPlaylistTVProgramsUseCase,
  FindAllTvProgramsUseCase,
} from '@/domain/usecases'
import { GetStaticProps } from 'next/types'

import Loading from '@/components/molecule/loading'
import TemplateFrontEnd from '@/components/templates/frontend'
import ProgramsTVScreen from '@/screens/programs-tv-screen'

export default function ProgramsTV({ staticNewestVideos, staticPlaylist }) {
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
    new FindAllPlaylistTVProgramsUseCase()
  )

  const newestVideos = await new FindAllTvProgramsUseCase().execute(null, { pageSize: '10' })
  const playlistAndItemsEither = await findAllPlaylistAndItemsUseCase.execute()

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
