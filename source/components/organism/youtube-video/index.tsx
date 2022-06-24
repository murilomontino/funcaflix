import React from 'react'
import Youtube from 'react-youtube'

import scss from './styles.module.scss'

const YoutubeVideo = ({ id }) => {
  if (!id) return null

  return (
    <Youtube
      id="youtube"
      className={scss['video-container']}
      videoId={id}
      opts={{
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 1,
          controls: 0,
        },
      }}
    />
  )
}

export default YoutubeVideo
