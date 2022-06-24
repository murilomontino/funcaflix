import React from 'react'

import DetailsMovies from '@/components/organism/details-movies'
import OtherEpisodies from '@/components/organism/other-episodies'
import YoutubeVideo from '@/components/organism/youtube-video'

const DetailsScreen = ({ videoId, playlist, videos, item }) => {
  return (
    <>
      <YoutubeVideo id={videoId} />
      <div className="main-content">
        <DetailsMovies playlist={playlist} item={item} />
        <OtherEpisodies items={videos} title={playlist.title} />
      </div>
    </>
  )
}

export default DetailsScreen
