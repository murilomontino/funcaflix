import React from 'react'

import DetailsMovies from '@/components/organism/details-movies'
import OtherEpisodies from '@/components/organism/other-episodies'
import YoutubeVideo from '@/components/organism/youtube-video'

const DetailsScreen = ({ id }) => {
  return (
    <>
      <YoutubeVideo id={id} />
      <div className="main-content">
        <DetailsMovies />
        <OtherEpisodies />
      </div>
    </>
  )
}

export default DetailsScreen
