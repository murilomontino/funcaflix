import React from 'react'
import { View } from 'react-native'

import { GettersVideosInfo } from '@/types'

import ThumbnailCard from '@/components/molecule/thumbnail-card'
import Carousel from '@/components/organism/carousel'

import { useFormVideos, useFormVideoSelectedVideo } from '@/forms/Product/product-video/hooks'

import DetailsVideo from './components/organisms/details'
import { Container } from './styles'

const Main = () => {
  const { videos } = useFormVideos()
  const { selectedVideo, onChangeSelectedVideo } = useFormVideoSelectedVideo()

  const handleSelect = (video: GettersVideosInfo) => {
    onChangeSelectedVideo(video)
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
        <DetailsVideo item={selectedVideo} />
      </View>
    </Container>
  )
}

export default Main
