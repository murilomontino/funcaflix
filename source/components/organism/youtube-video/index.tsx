import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import Controls from './components/controls'
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

const YoutubeVideo = ({ id }) => {
  const [videoId, setVideoId] = useState(id)
  const [timeDisplayFormat, setTimeDisplayFormat] = useState('normal')

  const [state, setState] = useState({
    pip: false,
    playing: false,
    controls: false,
    light: false,
    muted: false,
    played: 0,
    duration: 0,
    playbackRate: 1.0,
    volume: 1,
    loop: false,
    seeking: false,
  })

  const refAudio = useRef(null)
  const refVideo = useRef(null)
  const controlsRef = useRef(null)
  const playerContainerRef = useRef(null)

  const debounce = useDebounce()

  const { playing, controls, light, muted, loop, playbackRate, pip, played, volume } = state

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
    setVideoId(id)
  }, [id])

  if (!videoId) return null

  const currentTime = refVideo && refVideo.current ? refVideo.current.getCurrentTime() : '00:00'

  const duration = refVideo && refVideo.current ? refVideo.current.getDuration() : '00:00'
  const elapsedTime =
    timeDisplayFormat == 'normal' ? format(currentTime) : `-${format(duration - currentTime)}`
  const totalDuration = format(duration)

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
      refAudio.current.play()
      refAudio.current.currentTime = refVideo.current.getCurrentTime()
      return { ...state, playing: !state.playing }
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

  return (
    <div
      ref={playerContainerRef}
      className="position-relative w-100 mt-2"
      style={{
        height: '90vh',
      }}
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
        muted={muted}
        onPause={() => {
          refAudio.current.pause()
        }}
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
        url={`http://localhost:3000/api/video?videoId=${videoId}`}
      />
      <audio
        ref={refAudio}
        src={`http://localhost:3000/api/audio?videoId=${videoId}`}
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

export default YoutubeVideo
