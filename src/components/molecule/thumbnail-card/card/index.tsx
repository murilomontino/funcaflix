import React from 'react'
import { TouchableHighlight } from 'react-native'

import ThumbnailImage from '@/components/atom/thumbnail-image'

type Props = {
  hovered: boolean
  item: {
    id: string | number
    title: string
    thumbnail: string
    description: string
  }
  image: string
  height: number | string
}

const Card = ({ hovered, image, item, height }: Props) => {
  return (
    <TouchableHighlight style={{ width: '100%', height: height }}>
      <ThumbnailImage
        title={item.title}
        image={image}
        hover={hovered}
        key={item.id}
        animate={{
          top: hovered ? 25 : 0,
        }}
      />
    </TouchableHighlight>
  )
}

export default Card
