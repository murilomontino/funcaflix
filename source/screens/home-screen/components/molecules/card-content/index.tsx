import React from 'react'
import { ImageBackground, ScrollView } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import FormMoveButtons from '../../atom/form-move-buttons'
import ContentSlide from '../content-slide/'

import colors from '@/global/colors'

type Props = {
  item: {
    title: string
    thumbnail: string
    description: string
  }
  item_width: number
  index: number
  refScroll: React.MutableRefObject<ScrollView | undefined>
  length: number
  height: number | string
  offset: number
}

const CardContent = ({ item, item_width, index, refScroll, length, height, offset }: Props) => {
  return (
    <ImageBackground
      source={{
        uri: item.thumbnail,
      }}
      resizeMode="cover"
      style={{
        width: item_width,
        height: height,
        flex: 1,
        justifyContent: 'center',
      }}
      imageStyle={{
        borderRadius: 6,
      }}
    >
      <LinearGradient
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.1, 1]}
        colors={[colors.blackPerCent._100, colors.blackPerCent._90, 'transparent']}
        style={{
          flex: 1,
          width: item_width,
          height: height,
        }}
      >
        <ContentSlide title={item.title} synopsis={item.description} />
      </LinearGradient>
      <FormMoveButtons
        offset={offset}
        abas={length}
        current={index}
        condition={true}
        refScroll={refScroll}
      />
    </ImageBackground>
  )
}

export default CardContent
