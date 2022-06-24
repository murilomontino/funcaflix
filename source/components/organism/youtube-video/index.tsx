import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import screenful from 'screenfull'

import Controls from './components/controls'

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

let count = 0

const YoutubeVideo = ({ id }) => {
  const [videoId, setVideoId] = useState(id)
  const [timeDisplayFormat, setTimeDisplayFormat] = useState('normal')
  const [anchorEl, setAnchorEl] = useState(null)
  const [showControls, setShowControls] = useState(false)
  const [state, setState] = useState({
    pip: false,
    playing: false,
    controls: false,
    light: false,
    muted: true,
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

  const {
    playing,
    controls,
    light,

    muted,
    loop,
    playbackRate,
    pip,
    played,
    seeking,
    volume,
  } = state

  const handleMouseMove = () => {
    controlsRef.current.style.visibility = 'visible'
    count = 0
  }

  const handleMouseLeave = () => {
    controlsRef.current.style.visibility = 'hidden'
    count = 0
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
    if (count > 3) {
      controlsRef.current.style.visibility = 'hidden'
      count = 0
    }
    if (controlsRef.current.style.visibility == 'visible') {
      count += 1
    }
    if (!state.seeking) {
      setState({ ...state, ...changeState })
    }
  }

  const handleSeekChange = (e, newValue) => {
    setState({ ...state, played: parseFloat(newValue / 100) })
  }

  const handleSeekMouseDown = (e) => {
    setState((state) => {
      return { ...state, seeking: true }
    })
  }

  const handleRewind = () => {
    refVideo.current.seekTo(refVideo.current.getCurrentTime() - 10)
  }

  const handleFastForward = () => {
    refVideo.current.seekTo(refVideo.current.getCurrentTime() + 10)
  }

  const handleSeekMouseUp = (e, newValue) => {
    setState((state) => {
      refVideo.current.seekTo(newValue / 100, 'fraction')
      return { ...state, seeking: false }
    })
  }

  const handleDuration = (duration) => {
    setState((state) => {
      return { ...state, duration }
    })
  }

  const handleVolumeSeekDown = (e, newValue) => {
    setState((state) => {
      return { ...state, seeking: false, volume: parseFloat(newValue / 100) }
    })
  }
  const handleVolumeChange = (e, newValue) => {
    // console.log(newValue);
    setState((state) => {
      return {
        ...state,
        volume: parseFloat(newValue / 100),
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
    screenful.toggle(playerContainerRef.current)
  }

  const handleDisplayFormat = () => {
    setTimeDisplayFormat(timeDisplayFormat == 'normal' ? 'remaining' : 'normal')
  }

  const handlePlaybackRate = (rate) => {
    setState({ ...state, playbackRate: rate })
  }

  const handleMute = () => {
    setState((state) => {
      refAudio.current.muted = !state.muted
      return { ...state, muted: !state.muted }
    })
  }

  return (
    <div
      ref={playerContainerRef}
      className="position-relative w-100"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <ReactPlayer
        ref={refVideo}
        width={'100%'}
        pip={pip}
        playing={playing}
        controls={false}
        light={light}
        loop={loop}
        playbackRate={playbackRate}
        volume={volume}
        muted={muted}
        onPlay={() => {
          refAudio.current.play()
          refAudio.current.currentTime = refVideo.current.getCurrentTime()
        }}
        onPause={() => {
          refAudio.current.pause()
          refAudio.current.currentTime = refVideo.current.getCurrentTime()
        }}
        onProgress={(progress) => {
          if (progress.playedSeconds - refAudio.current.currentTime > 0.5) {
            refAudio.current.currentTime = progress.playedSeconds
          }
        }}
        height={'100vh'}
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
      <audio ref={refAudio} src={`http://localhost:3000/api/audio?videoId=${videoId}`} />
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
      />
    </div>
  )
}

export default YoutubeVideo
