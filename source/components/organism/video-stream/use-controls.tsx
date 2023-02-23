import { useEffect, useState } from 'react'

import screenful from './screenfull'

import useDebounce from '@/hooks/utils/use-debounce'

const format = (seconds) => {
	if (isNaN(seconds)) {
		return `00:00`
	}
	const date = new Date(seconds * 1000)
	const hh = date.getUTCHours()
	const mm = date.getUTCMinutes()
	const ss = date.getUTCSeconds().toString().padStart(2, '0')
	if (hh) {
		return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`
	}
	return `${mm}:${ss}`
}

function useControls({ controlsRef, playerContainerRef, refVideo, refAudio }) {
	const [state, setState] = useState({
		pip: false,
		playing: false,
		controls: false,
		light: false,
		muted: false,
		played: 0,
		playbackRate: 1.0,
		volume: 1,
		loop: false,
		seeking: false,
	})
	const [timeDisplayFormat, setTimeDisplayFormat] = useState('normal')

	const currentTime =
		refVideo && refVideo.current ? refVideo.current.getCurrentTime() : '00:00'

	const duration =
		refVideo && refVideo.current ? refVideo.current.getDuration() : '00:00'
	const elapsedTime =
		timeDisplayFormat == 'normal'
			? format(currentTime)
			: `-${format(duration - currentTime)}`
	const totalDuration = format(duration)

	const debounce = useDebounce()

	const handleMouseMove = () => {
		controlsRef.current.style.visibility = 'visible'
		playerContainerRef.current.style.cursor = 'default'

		debounce(() => {
			controlsRef.current.style.visibility = 'hidden'
			playerContainerRef.current.style.cursor = 'none'
		}, 2000)
	}

	const handleMouseLeave = () => {
		controlsRef.current.style.visibility = 'hidden'
	}
	useEffect(() => {
		if (state.playing) {
			refAudio.current.currentTime = refVideo.current.getCurrentTime()
			refAudio.current.play()
		} else {
			refAudio.current.currentTime = refVideo.current.getCurrentTime()
			refAudio.current.pause()
		}
	}, [state.playing])

	const handleProgress = (changeState) => {
		const time = changeState.playedSeconds - refAudio.current.currentTime
		const minTime = time > 0.5
		const maxTime = time < -0.5

		if (minTime || maxTime) {
			refAudio.current.currentTime = changeState.playedSeconds
		}

		if (!state.seeking) {
			setState((state) => ({ ...state, ...changeState }))
		}
	}

	const handleSeekMouseDown = (e) => {
		setState((state) => {
			return { ...state, seeking: true }
		})
	}

	const handleSeekMouseUp = (e, newValue) => {
		setState((state) => {
			refVideo.current.seekTo(newValue / 100, 'fraction')
			return { ...state, seeking: false }
		})
	}
	const handleSeekChange = (e, newValue) => {
		setState((state) => {
			const played = parseFloat((newValue / 100).toString())
			return { ...state, played }
		})
	}

	const handleRewind = () => {
		refVideo.current.seekTo(refVideo.current.getCurrentTime() - 10)
	}

	const handleFastForward = () => {
		refVideo.current.seekTo(refVideo.current.getCurrentTime() + 10)
	}

	const handleDuration = (duration) => {
		setState((state) => {
			return { ...state, duration }
		})
	}

	const handleVolumeSeekDown = (e, newValue) => {
		setState((state) => {
			const volume = parseFloat((newValue / 100).toString())

			refAudio.current.volume = volume
			return { ...state, seeking: false, volume }
		})
	}

	const handleEnd = () => {
		setState((state) => {
			refAudio.current.pause()
			return { ...state, playing: false }
		})
	}

	const handleVolumeChange = (e: any, newValue: number) => {
		// console.log(newValue);
		setState((state) => {
			const volume = parseFloat((newValue / 100).toString())

			refAudio.current.volume = volume

			return {
				...state,
				volume,
				muted: newValue === 0 ? true : false,
			}
		})
	}

	const handlePlayPause = () => {
		setState((state) => {
			const playing = !state.playing
			refAudio.current.currentTime = refVideo.current.getCurrentTime()
			return { ...state, playing }
		})
	}

	const toggleFullScreen = () => {
		screenful.toggle(playerContainerRef.current, null)
	}

	const handleDisplayFormat = () => {
		setTimeDisplayFormat(timeDisplayFormat == 'normal' ? 'remaining' : 'normal')
	}

	const handlePlaybackRate = (rate) => {
		setState((state) => {
			refAudio.current.playbackRate = rate
			return { ...state, playbackRate: rate }
		})
	}

	const handleMute = () => {
		setState((state) => {
			return { ...state, muted: !state.muted }
		})
	}

	return {
		...state,
		duration,
		elapsedTime,
		totalDuration,
		timeDisplayFormat,
		handleMouseLeave,
		handleMouseMove,
		handleSeekMouseDown,
		handleSeekMouseUp,
		handleProgress,
		handleSeekChange,
		handleRewind,
		handleFastForward,
		handleDuration,
		handleVolumeSeekDown,
		handleVolumeChange,
		handlePlayPause,
		toggleFullScreen,
		handleDisplayFormat,
		handlePlaybackRate,
		handleMute,
		handleEnd,
		setState,
		setTimeDisplayFormat,
	}
}

export default useControls
