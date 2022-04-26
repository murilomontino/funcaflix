import React, { useRef, useMemo } from 'react'
import { TouchableHighlight, View, Platform } from 'react-native'
import { useHover } from 'react-native-web-hooks'

import theme from '@/theme'
import { MotiView } from 'moti'

import ButtonsCard from '@/components/atom/buttons-card/buttons-card'
import DescriptionMovie from '@/components/atom/description-movie'
import ThumbnailImage from '@/components/atom/thumbnail-image'

import { ContainerDescription, ContainerButtons, ContainerAnimated } from './styles'

import colors from '@/global/colors'
import { useSize } from '@/hooks/utils/use-size'

type Props = {
  index: number
  item: {
    id: number
    title: string
    thumbnail: string
    description: string
  }
  width: number | string
  image: string
}

const TIME_ANIMATION = 500
const DELAY = 100
const SCALE = 0.85
const BORDER_WIDTH = 2
const BORDER_RADIUS = 4

const ThumbnailCard = ({ item, width, image, index }: Props) => {
  const web = Platform.OS === 'web'

  const HEIGHT_ITEM = theme.CONSTANTS.HEIGHT_ITEM_THUMBNAIL // vw
  const HEIGHT_CARD = parseInt(theme.CONSTANTS.HEIGHT_ITEM_THUMBNAIL.replace('vw', '')) * 2 // vw

  const ref = useRef()
  const hovered = useHover(ref)
  const { size } = useSize()
  const CARD_WIDTH = width + 35

  const animated = useMemo(() => {
    const screen_minimum = size.width >= theme.CONSTANTS.SCREEN.TINY
    return hovered && web && screen_minimum
  }, [hovered, web, size.width])

  return (
    <ContainerAnimated
      ref={ref}
      key={index}
      animate={{
        minWidth: 160,
        minHeight: 90,
        scale: animated ? 1.1 : SCALE,
        width: animated ? CARD_WIDTH : width,
        height: animated ? HEIGHT_CARD : HEIGHT_ITEM,
        maxHeight: 360,
        maxWidth: 320,
      }}
      transition={{ type: 'timing', delay: DELAY, duration: TIME_ANIMATION }}
      style={[
        {
          borderRadius: 20,
        },
        animated && {
          borderWidth: BORDER_WIDTH,
          borderRadius: BORDER_RADIUS,
          borderColor: colors.button,
        },
      ]}
    >
      <TouchableHighlight style={{ flex: 1, width: '100%' }}>
        <View style={{ flex: 1 }}>
          <ThumbnailImage title={item.title} image={image} hover={hovered} key={item.id} />

          {animated && (
            <MotiView
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'timing', duration: TIME_ANIMATION }}
              style={{ flex: 1, justifyContent: 'flex-end' }}
            >
              <ContainerDescription>
                <DescriptionMovie description={item.description} />
              </ContainerDescription>
              <ContainerButtons>
                <ButtonsCard />
              </ContainerButtons>
            </MotiView>
          )}
        </View>
      </TouchableHighlight>
    </ContainerAnimated>
  )
}

export default ThumbnailCard
