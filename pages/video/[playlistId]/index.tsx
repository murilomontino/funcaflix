import React, { useEffect, useMemo, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

import {
	FindAllProductsByCategory,
	FindAllTvProgramsUseCase,
} from '@/domain/usecases'
import theme from '@/theme'
import { build, db } from 'mapacultural-database'
import { useRouter } from 'next/router'
import type { GetStaticProps } from 'next/types'

import DetailsScreen from '@/screens/details-movies-screen'

import api from '@/services'

import { Choose, When } from '@/utils/tsx-controls'

const VideoPageDetails = ({ staticVideos, staticPlaylist }) => {
	const { videoId } = useRouter().query

	const [video, setVideo] = useState(null)
	const [id, setId] = useState(null)
	const [info, setInfo] = useState(null)
	const [loading, setLoading] = useState(true)

	const fetchInfoVideo = async (videoId) => {
		const response = await api.get(`info/${videoId}`)
		setInfo(response.data.videoDetails)
	}

	useEffect(() => {
		if (!videoId) {
			if (staticVideos?.length === 0) return setLoading(false)
			setVideo(staticVideos?.[0])
			setId(staticVideos?.[0].videoId)
			return setLoading(false)
		}

		fetchInfoVideo(videoId)
		setId(videoId)

		const video = staticVideos?.find((video) => video.videoId === videoId)

		if (!video) return setLoading(false)

		setVideo(video)
		setLoading(false)

		return () => {
			setVideo(null)
		}
	}, [videoId, staticVideos, loading])

	const isLoading = useMemo(
		() =>
			(staticVideos === null || staticVideos === undefined || !id || !video) &&
			loading,
		[staticVideos, id, video, loading]
	)

	if (info?.isPrivate) {
		return (
			<div
				className="container w-100 d-flex justify-content-center align-items-center"
				style={{ height: '80vh' }}
			>
				<div className="row">
					<div className="col-12">
						<h1>Este vídeo está privado</h1>
					</div>
				</div>
			</div>
		)
	}

	return (
		<React.Fragment>
			<Choose>
				<When condition={isLoading}>
					<Skeleton
						width="100%"
						height={'90vh'}
						baseColor={theme.COLORS.BOX_SKELETON}
					/>
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
		</React.Fragment>
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
