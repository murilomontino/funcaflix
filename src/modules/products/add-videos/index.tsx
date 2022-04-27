import React from 'react'
import { Text, View } from 'react-native'

import { GettersVideosInfo } from '@/types'

import Carousel from '@/components/organism/carousel'

type Props = {
  videos: GettersVideosInfo[]
}

const Main = ({ videos }: Props) => {
  const data = videos.map(({ id, thumbnail, sobre_a_obra, titulo, artista }) => ({
    id,
    title: titulo,
    description: sobre_a_obra,
    thumbnail,
  }))
  console.log(data)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Carousel items={data} title="Videos em Espera" />
      {videos.map((video) => (
        <Text key={video.id}>{video.titulo}</Text>
      ))}
    </View>
  )
}

export default Main
