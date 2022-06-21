import React from 'react'

import CarouselSwipper from '@/components/organism/slide-swipper'
import TrendingMainSlider from '@/components/organism/trending-main-slider'

const ProgramsTVScreen = ({ newestItems, playlist }) => {
  return (
    <>
      <TrendingMainSlider items={newestItems} />
      {playlist.map((item, index) => (
        <CarouselSwipper key={index} items={item.items} title={item.title} id={item.playlistId} />
      ))}
    </>
  )
}

export default ProgramsTVScreen
