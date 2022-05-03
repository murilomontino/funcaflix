import React, { useState } from 'react'
import { View } from 'react-native'

import { GettersVideosInfo } from '@/types'

import ThumbnailCard from '@/components/molecule/thumbnail-card'
import Carousel from '@/components/organism/carousel'

import CardInsertVideo from './components/organisms/card-insert-video'
import { Container } from './styles'

type Props = {
  videos: GettersVideosInfo[]
}

const Main = ({ videos }: Props) => {
  const [select, setSelect] = useState<GettersVideosInfo>(null)

  const handleSelect = (video: GettersVideosInfo) => {
    setSelect(video)
  }

  return (
    <Container>
      <Carousel title="Videos em Espera">
        {videos.map((item, index) => {
          const handleClickItem = (e) => {
            e.preventDefault()
            handleSelect(item)
          }
          return (
            <ThumbnailCard
              onClick={handleClickItem}
              isButton
              key={index}
              index={index}
              item={{
                id: item.id,
                title: item.titulo,
                description: item.sobre_a_obra,
                image: item.thumbnail,
              }}
            />
          )
        })}
      </Carousel>
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <CardInsertVideo item={select} />
      </View>
    </Container>
  )
}

export default Main
