import React, { useEffect, useMemo, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

import { FindAllProductsByCategory, FindAllTvProgramsUseCase } from '@/domain/usecases'
import theme from '@/theme'
import { db, build } from 'mapacultural-database'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next/types'

import TemplateFrontEnd from '@/components/templates/frontend'
import DetailsScreen from '@/screens/details-movies-screen'

import { Choose, When } from '@/utils/tsx-controls'
import api from '@/services'

const VideoPageDetails = ({ staticVideos, staticPlaylist }) => {
  const { videoId } = useRouter().query

  const [video, setVideo] = useState(null)
  const [id, setId] = useState(null)
  const [info, setInfo] = useState(null)

  const fetchInfoVideo = async (videoId) => {
    const response = await api.get(`info/${videoId}`)
    setInfo(response.data.videoDetails)
  }

  useEffect(() => {
    if (!videoId) {
      if (staticVideos?.length === 0) return

      setVideo(staticVideos?.[0])
      setId(staticVideos?.[0].videoId)

      return
    }

    fetchInfoVideo(videoId)
    setId(videoId)

    const video = staticVideos?.find((video) => video.videoId === videoId)
    if (!video) return

    setVideo(video)


    return () => {
      setVideo(null)
    }
  }, [videoId, staticVideos])

  const isLoading = useMemo(
    () => staticVideos === null || staticVideos === undefined || !id || !video,
    [staticVideos, id, video]
  )

  if (info?.isPrivate) {
    return (
      <div className="container w-100 d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
        <div className="row">
          <div className="col-12">
            <h1>Este vídeo está privado</h1>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Choose>
      <When condition={true}>
        <Skeleton width="100%" height={'90vh'} baseColor={theme.COLORS.BOX_SKELETON} />
      </When>
      <When condition={!isLoading}>
        <DetailsScreen
          videoId={id}
          playlist={staticPlaylist}
          videos={staticVideos || []}
          item={video}
        />
      </When>
    </Choose>
  )
}

export default VideoPageDetails

export const getStaticPaths = async (context) => {
  await build()

  const audioVisual = await new FindAllProductsByCategory().execute(null, {
    category: ['152', '1'],
  })

  if (process.env.ELECTION_PERIOD || audioVisual.isRight()) {
    return {
      paths: [],
      fallback: true,
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

  const { playlistId } = params

  const playlist = await (
    await db.ModelInfoProducts.findOne({
      where: { id: playlistId },
    })
  ).get()

  const audioVisualOrErr = await new FindAllTvProgramsUseCase().execute(
    {
      isNecessarySubCategory: false,
    },
    {
      idProduct: playlist.id,
    }
  )

  const audioVisual = audioVisualOrErr.isLeft() && audioVisualOrErr.extract()

  return {
    props: {
      staticVideos: audioVisual || [],
      staticPlaylist: {
        ...playlist,
        createdAt: playlist?.createdAt?.toISOString(),
        updatedAt: playlist?.updatedAt?.toISOString(),
      },
    },
    revalidate: 60 * 60 * 24,
  }
}
