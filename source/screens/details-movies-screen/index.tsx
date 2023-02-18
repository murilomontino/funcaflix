import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

import theme from '@/theme'

import DetailsMovies from '@/components/organism/details-movies'
import OtherEpisodies from '@/components/organism/other-episodies'
import VideoStream from '@/components/organism/video-stream'

import { Choose, When } from '@/utils/tsx-controls'

const DetailsScreen = ({ videoId, playlist, videos, item }) => {
	const [video, setVideo] = useState(null)

	useEffect(() => {
		setVideo(videoId)
	}, [videoId])

	const onChangeEpisode = (id) => {
		setVideo(id)
	}

	return (
		<>
			<Choose>
				<When condition={!video}>
					<Skeleton
						width="100%"
						height={'90vh'}
						baseColor={theme.COLORS.BOX_SKELETON}
					/>
				</When>
				<When condition={video}>
					<VideoStream id={video} />
				</When>
			</Choose>

			<div className="main-content">
				<DetailsMovies playlist={playlist} item={item} />
				<OtherEpisodies
					items={videos}
					title={playlist.title}
					onChangeEpisode={onChangeEpisode}
				/>
			</div>
		</>
	)
}

export default DetailsScreen
