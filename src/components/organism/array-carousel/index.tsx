import React, { useState } from 'react'

import ThumbnailCard from '@/components/molecule/thumbnail-card'
import Carousel from '@/components/organism/carousel'

import { items } from './home_slide.json'

import { ThumbnailsMax } from '@/utils/thumbnail-max'

const ArrayCarousel = () => {
  const [selected, setSelected] = useState(0)

  const onChangeSelected = (index: number) => {
    setSelected(index)
  }

  return [1, 2, 3, 4, 5].map((item, index) => (
    <div
      key={item.toString()}
      style={{
        zIndex: selected === index ? 99 : 'auto',
        width: '100%',
      }}
    >
      <Carousel onChangeCurrent={onChangeSelected} carousel={index} title={index.toString()}>
        {items.map((item, index) => (
          <ThumbnailCard
            key={index}
            index={index}
            item={{
              id: item.id,
              title: item.snippet.title,
              description: item.snippet.description,
              image: ThumbnailsMax(item.snippet.thumbnails),
            }}
          />
        ))}
      </Carousel>
    </div>
  ))
}

export default ArrayCarousel
