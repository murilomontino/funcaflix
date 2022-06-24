import React, { useState } from 'react'

import DetailsMovies from '@/components/organism/details-movies'
import OtherEpisodies from '@/components/organism/other-episodies'
import YoutubeVideo from '@/components/organism/youtube-video'

const DetailsScreen = ({ videoId, playlist, videos, item }) => {
  const [video, setState] = useState(videoId)

  const onChangeEpisode = (id) => {
    setState(id)
  }

  return (
    <>
      {video && <YoutubeVideo id={video} />}
      <div className="main-content">
        <DetailsMovies playlist={playlist} item={item} />
        <OtherEpisodies items={videos} title={playlist.title} onChangeEpisode={onChangeEpisode} />
      </div>
    </>
  )
}

export default DetailsScreen
