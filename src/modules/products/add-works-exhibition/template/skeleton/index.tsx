import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { View } from 'react-native'

import theme from '@/theme'

import { Container, ContainerInfo } from './styles'

import { useSize } from '@/hooks/use-size'

import 'react-loading-skeleton/dist/skeleton.css'

export const CardSkeleton = () => {
  const WIDTH_CARD_INFO = 160

  const WIDTH_CARD_LOGO = 140

  const WIDTH_CARD = WIDTH_CARD_INFO + WIDTH_CARD_LOGO + 100
  const HEIGHT_CARD = 170

  const HEIGHT_TITLE = 20
  const HEIGHT_TEXT = 14

  const DURATION = 2

  const STYLE_TITLE = {
    marginLeft: 20,
    marginBottom: 20,
  }

  const STYLE_TEXT = {
    marginLeft: 20,
    marginBottom: 10,
  }

  return (
    <Container
      style={{
        width: WIDTH_CARD,
        height: HEIGHT_CARD,
      }}
    >
      <Skeleton
        baseColor={theme.COLORS.SKELETON}
        duration={DURATION}
        height={WIDTH_CARD_LOGO}
        width={WIDTH_CARD_LOGO}
      />

      <ContainerInfo>
        <Skeleton
          height={HEIGHT_TITLE}
          width={WIDTH_CARD_INFO}
          duration={DURATION}
          baseColor={theme.COLORS.SKELETON}
          style={STYLE_TITLE}
        />

        <Skeleton
          height={HEIGHT_TEXT}
          width={WIDTH_CARD_INFO}
          duration={DURATION}
          baseColor={theme.COLORS.SKELETON}
          style={STYLE_TEXT}
        />

        <Skeleton
          height={HEIGHT_TEXT}
          width={WIDTH_CARD_INFO}
          duration={DURATION}
          baseColor={theme.COLORS.SKELETON}
          style={STYLE_TEXT}
        />

        <Skeleton
          height={HEIGHT_TEXT}
          width={WIDTH_CARD_INFO}
          duration={DURATION}
          baseColor={theme.COLORS.SKELETON}
          style={STYLE_TEXT}
        />
      </ContainerInfo>
    </Container>
  )
}

const SkeletonTemplate = () => {
  const { size } = useSize()

  return (
    <View
      style={{
        width: size.width,
        minHeight: 800,
      }}
    >
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </View>
  )
}

export default SkeletonTemplate
