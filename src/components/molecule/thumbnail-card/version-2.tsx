import React, { useRef } from 'react'
import { TouchableHighlight, Platform, View } from 'react-native'
import { useHover } from 'react-native-web-hooks'

import theme from '@/theme'
import { MotiView } from 'moti'

import ButtonsCard from '@/components/atom/buttons-card/buttons-card'
import DescriptionMovie from '@/components/atom/description-movie'
import ThumbnailImage from '@/components/atom/thumbnail-image'

import { ContainerButtons, ContainerDescription } from './styles'

import { useSize } from '@/hooks/utils/use-size'

type Props = {
  index: number
  isAnimated?: boolean
  isBoxDescription?: boolean
  item: {
    id: string | number
    title: string
    thumbnail: string
    description: string
  }
  width: number | string
  image: string
}

const ThumbnailCardVersion2 = ({
  image,
  index,
  item,
  width,
  isAnimated,
  isBoxDescription = true,
}: Props) => {
  const web = Platform.OS === 'web'

  const refThumb = useRef()
  const hovered = useHover(refThumb)
  const refCard = useRef()
  const hoveredCard = useHover(refCard)
  const { size } = useSize()

  const animated = (() => {
    const screen_minimum = size.width >= theme.CONSTANTS.SCREEN.TINY
    return hovered && web && screen_minimum && isAnimated
  })()

  return (
    <TouchableHighlight
      style={{
        scaleX: 1,
        minHeight: 240,
        height: theme.CONSTANTS.HEIGHT_ITEM_THUMBNAIL,
        margin: 2,
        width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <MotiView
        animate={{
          top: hovered || hoveredCard ? 0 : 50,
          scaleX: hovered || hoveredCard ? 1.3 : 1,
          scaleY: hovered || hoveredCard ? 1.2 : 0.9,
        }}
        transition={{
          type: 'timing',
          delay: 0,
          duration: 100,
        }}
        style={{
          height: animated || hoveredCard ? '100%' : '50%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'transparent',
        }}
      >
        <View
          ref={refThumb}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            borderWidth: 1,
            borderColor: theme.COLORS.BUTTON_SECONDARY,
          }}
        >
          <ThumbnailImage image={image} title={item.title} hover={hovered} />
        </View>
        {isBoxDescription && (
          <MotiView
            ref={refCard}
            transition={{
              type: 'timing',
              delay: 0,
              duration: 100,
            }}
            animate={{
              opacity: animated || hoveredCard ? 1 : 0,
              backgroundColor:
                animated || hoveredCard ? theme.COLORS.THUMBNAIL_CARD_BACKGROUND : 'transparent',
            }}
            style={{
              flex: animated || hoveredCard ? 0.8 : 0.1,
              borderWidth: 1,
              borderColor: theme.COLORS.BUTTON_SECONDARY,
              borderTopWidth: 0,
              backgroundColor: theme.COLORS.THUMBNAIL_CARD_BACKGROUND,
              borderRadius: 4,
              borderTopEndRadius: 0,
              borderTopStartRadius: 0,
            }}
          >
            <ContainerDescription>
              <DescriptionMovie description={'Descrição'} animated={true} />
            </ContainerDescription>
            <ContainerButtons>
              <ButtonsCard animated={true} />
            </ContainerButtons>
          </MotiView>
        )}
      </MotiView>
    </TouchableHighlight>
  )
}

export default ThumbnailCardVersion2
