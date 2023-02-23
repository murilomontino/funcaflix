import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import Controls from './components/controls'
import scss from './styles.module.scss'
import useControls from './use-controls'

const VideoStream = ({ id }) => {
	const [videoId, setVideoId] = useState(id)

	const refAudio = useRef(null)
	const refVideo = useRef(null)
	const controlsRef = useRef(null)
	const playerContainerRef = useRef(null)
	if (!videoId) return null

	const {
		playing,
		controls,
		light,
		muted,
		loop,
		playbackRate,
		pip,
		played,
		volume,
		handleMouseLeave,
		handleMouseMove,
		handleProgress,
		handleSeekMouseDown,
		handleSeekMouseUp,
		elapsedTime,
		totalDuration,
		handleDisplayFormat,
		handleDuration,
		handleEnd,
		handleFastForward,
		handleMute,
		handlePlayPause,
		handlePlaybackRate,
		handleRewind,
		handleSeekChange,
		handleVolumeChange,
		handleVolumeSeekDown,
		toggleFullScreen,
	} = useControls({
		controlsRef,
		playerContainerRef,
		refVideo,
		refAudio,
	})

	useEffect(() => {
		setVideoId(id)
	}, [id])

	/*   useEffect(() => {
    console.log('refVideo', refVideo)
    socket.emit('stream-video', { videoId })

    if (refVideo.current) {
      socket.on('stream-video', (data) => {
        console.log('está streamando')
        const internal = refVideo.current.getInternalPlayer()
        console.log(internal)
      })
    }
  }, [refVideo, videoId]) */

	return (
		<div
			ref={playerContainerRef}
			className={`position-relative w-100 mt-2 ${scss['player-container']}`}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<ReactPlayer
				ref={refVideo}
				width={'100vw'}
				pip={pip}
				playing={playing}
				controls={controls}
				light={light}
				loop={loop}
				playbackRate={playbackRate}
				muted
				onPause={() => {
					refAudio.current.pause()
				}}
				onEnded={handleEnd}
				onProgress={handleProgress}
				height={'100%'}
				config={{
					youtube: {
						playerVars: {
							autoplay: 1,
							color: '#fff',
							iv_load_policy: 3,
							modestbranding: 1,
							rel: 0,
							showinfo: 0,
						},
					},
					file: {
						attributes: {
							onContextMenu: (e) => e.preventDefault(),
						},
					},
				}}
				url={`${process.env._currentURL}video?videoId=${videoId}`}
			/>
			<audio
				ref={refAudio}
				src={`${process.env._currentURL}audio?videoId=${videoId}`}
				muted={muted}
			/>
			<Controls
				onPlayPause={handlePlayPause}
				ref={controlsRef}
				playing={playing}
				played={played}
				muted={muted}
				playbackRate={playbackRate}
				volume={volume}
				elapsedTime={elapsedTime}
				totalDuration={totalDuration}
				onMute={handleMute}
				onChangeDisplayFormat={handleDisplayFormat}
				onToggleFullScreen={toggleFullScreen}
				onVolumeChange={handleVolumeChange}
				onDuration={handleDuration}
				onSeekMouseDown={handleSeekMouseDown}
				onVolumeSeekDown={handleVolumeSeekDown}
				onSeekMouseUp={handleSeekMouseUp}
				onPlaybackRateChange={handlePlaybackRate}
				onSeek={handleSeekChange}
				onRewind={handleRewind}
				onFastForward={handleFastForward}
			/>
		</div>
	)
}

export default VideoStream
