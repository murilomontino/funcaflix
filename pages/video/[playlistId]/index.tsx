import React, { useEffect, useState } from 'react'

import { build, db } from '@/database'
import { FindAllProductsByCategory, FindAllTvProgramsUseCase } from '@/domain/usecases'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next/types'

import TemplateFrontEnd from '@/components/templates/frontend'
import DetailsScreen from '@/screens/details-movies-screen'

const VideoPageDetails = ({ staticVideos, staticPlaylist }) => {
  const { videoId } = useRouter().query

  const [video, setVideo] = useState(null)
  const [id, setId] = useState(null)

  useEffect(() => {
    if (videoId) {
      setVideo(staticVideos.find((video) => video.videoId === videoId))
      setId(videoId)
      return
    }

    setVideo(staticVideos[0])
    setId(staticVideos[0].videoId)

    return () => {
      setVideo(null)
    }
  }, [videoId, staticVideos])

  if (!staticVideos || !video || !id) {
    return <p>Loading...</p>
  }

  return (
    <TemplateFrontEnd>
      <DetailsScreen videoId={id} playlist={staticPlaylist} videos={staticVideos} item={video} />
    </TemplateFrontEnd>
  )
}

export default VideoPageDetails

export const getStaticPaths = async (context) => {
  await build()
  const audioVisual = await new FindAllProductsByCategory().execute(null, {
    category: ['152', '1'],
  })

  if (audioVisual.isRight()) {
    return {
      paths: [],
      fallback: false,
    }
  }

  const paths = await Promise.all([
    ...audioVisual.value.map((playlist) => ({
      params: { playlistId: playlist.id.toString() },
    })),
  ])

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await build()

  const playlist = await (await db.ModelInfoProducts.findByPk(params.playlistId.toString())).get()
  const audioVisualEither = await new FindAllTvProgramsUseCase().execute(null, {
    playlistId: playlist.link,
  })

  const audioVisual = audioVisualEither.isLeft ? audioVisualEither.value : null

  return {
    props: {
      staticVideos: audioVisual,
      staticPlaylist: {
        ...playlist,
        createdAt: playlist?.createdAt?.toISOString(),
        updatedAt: playlist?.updatedAt?.toISOString(),
      },
    },
    revalidate: 60 * 60 * 24,
  }
}
