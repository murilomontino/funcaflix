import React, { useState } from 'react'
import { View } from 'react-native'

import { GettersVideosInfo } from '@/types'

import ThumbnailCard from '@/components/molecule/thumbnail-card'
import Carousel from '@/components/organism/carousel'

type Props = {
  videos: GettersVideosInfo[]
}

const Main = ({ videos }: Props) => {
  const [video, setVideo] = useState<GettersVideosInfo>(null)

  const data = videos.map(({ id, thumbnail, sobre_a_obra, titulo }) => ({
    id,
    title: titulo,
    description: sobre_a_obra,
    thumbnail,
  }))

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Carousel title="Videos em Espera">
        {data.map((item, index) => (
          <ThumbnailCard
            onClick={() => setVideo(item)}
            animated={false}
            key={index}
            index={index}
            item={{
              id: item.id,
              title: item.title,
              description: item.description,
              image: item.thumbnail,
            }}
          />
        ))}
      </Carousel>
      {}
    </View>
  )
}

export default Main
