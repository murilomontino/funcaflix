import React, { useRef, useMemo } from 'react'
import { TouchableHighlight, View, Platform } from 'react-native'
import { useHover } from 'react-native-web-hooks'

import { MotiView } from 'moti'

import ButtonsCard from '@/components/atom/buttons-card/buttons-card'
import DescriptionMovie from '@/components/atom/description-movie'
import ThumbnailImage from '@/components/atom/thumbnail-image'

import { ContainerDescription, ContainerButtons, ContainerAnimated } from './styles'

import colors from '@/global/colors'

type Props = {
  index: number
  card: {
    width: number
    height: number
  }
  item: {
    id: number
    title: string
    thumbnail: string
    description: string
  }
  width: number
  height: number
  image: string
}

const TIME_ANIMATION = 100
const DELAY = 100
const SCALE = 0.9
const BORDER_WIDTH = 2
const BORDER_RADIUS = 4

const ThumbnailCard = ({ item, width, height, image, index, card }: Props) => {
  const web = Platform.OS === 'web'

  const ref = useRef()
  const hovered = useHover(ref)

  const CARD_HEIGHT = card.height
  const CARD_WIDTH = card.width

  const animated = useMemo(() => hovered && web, [hovered, web])

  return (
    <ContainerAnimated
      ref={ref}
      key={index}
      animate={{
        scale: animated ? 1.1 : SCALE,
        width: animated ? CARD_WIDTH : width,
        height: animated ? CARD_HEIGHT : height,
      }}
      transition={{ type: 'timing', delay: DELAY, duration: TIME_ANIMATION }}
      style={[
        animated && {
          borderWidth: BORDER_WIDTH,
          borderRadius: BORDER_RADIUS,
          borderColor: colors.button,
        },
      ]}
    >
      <TouchableHighlight style={{ flex: 1, width: '100%', height: '100%' }}>
        <>
          <View style={{ flex: 1 }}>
            <ThumbnailImage
              height={height}
              width={width}
              title={item.title}
              image={image}
              hover={hovered}
              maxWidth={CARD_WIDTH}
              borderRadius={BORDER_RADIUS}
              key={item.id}
            />
          </View>
          {animated && (
            <MotiView
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'timing', duration: TIME_ANIMATION }}
              style={{ flex: 1 }}
            >
              <ContainerDescription>
                <DescriptionMovie description={item.description} />
              </ContainerDescription>
              <ContainerButtons>
                <ButtonsCard />
              </ContainerButtons>
            </MotiView>
          )}
        </>
      </TouchableHighlight>
    </ContainerAnimated>
  )
}

export default ThumbnailCard
