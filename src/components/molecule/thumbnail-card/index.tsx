import React, { useRef, useMemo } from 'react'
import { Platform, TouchableHighlight } from 'react-native'
import { useHover } from 'react-native-web-hooks'

import theme from '@/theme'
import { AnimatePresence, MotiView } from 'moti'

import ButtonsCard from '@/components/atom/buttons-card/buttons-card'
import DescriptionMovie from '@/components/atom/description-movie'
import ThumbnailImage from '@/components/atom/thumbnail-image'

import { ContainerAnimated, ContainerButtons, ContainerDescription } from './styles'

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

const SCALE = 0.85

const ThumbnailCard = ({
  item,
  width,
  image,
  index,
  isAnimated = true,
  isBoxDescription = true,
}: Props) => {
  const web = Platform.OS === 'web'

  const HEIGHT_ITEM = theme.CONSTANTS.HEIGHT_ITEM_THUMBNAIL // vw

  const ref = useRef()
  const hovered = useHover(ref)
  const { size } = useSize()

  const { HEIGHT_CARD } = useMemo(() => {
    const VW = parseInt(theme.CONSTANTS.HEIGHT_ITEM_THUMBNAIL.replace('vw', ''))

    if (!isBoxDescription) {
      const HEIGHT_CARD = VW * 1.2 // vw

      return {
        HEIGHT_CARD,
      }
    }
    const HEIGHT_CARD = VW * 2.3 // vw
    return {
      HEIGHT_CARD,
    }
  }, [width, isBoxDescription])

  const animated = (() => {
    const screen_minimum = size.width >= theme.CONSTANTS.SCREEN.TINY
    return hovered && web && screen_minimum && isAnimated
  })()

  return (
    <ContainerAnimated
      ref={ref}
      key={index}
      animate={{
        scaleX: 0.85,
        height: '100%',
      }}
      transition={{
        type: 'timing',
        delay: 0,
        duration: 0,
      }}
      style={[
        {
          width: width,
          minWidth: 200,
          minHeight: 140,
          borderRadius: 2,
        },
      ]}
    >
      <MotiView
        transition={{
          type: 'timing',
          delay: 200,
          duration: 300,
        }}
        animate={{
          scaleX: animated ? 1.2 : 1,
          scaleY: animated ? 1.2 : 1,
          top: animated ? 0 : 50,
        }}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
        }}
      >
        <TouchableHighlight style={{ flex: 1, width: '100%', height: '100%' }}>
          <>
            <ThumbnailImage
              title={item.title}
              image={image}
              hover={true}
              key={item.id}
              animate={{
                scale: animated ? 1.0 : 0.9,
              }}
            />

            <AnimatePresence>
              <MotiView
                transition={{
                  type: 'timing',
                  delay: 50,
                  duration: 100,
                }}
                style={{
                  flex: 1,
                  opacity: 0,
                  zIndex: 0,
                  justifyContent: 'flex-end',
                  borderWidth: 1,
                  borderColor: theme.COLORS.BUTTON_SECONDARY,
                  borderTopWidth: 0,
                  backgroundColor: theme.COLORS.THUMBNAIL_CARD_BACKGROUND,
                  borderRadius: 4,
                }}
              >
                <ContainerDescription>
                  <DescriptionMovie description={item.description} animated={animated} />
                </ContainerDescription>
                <ContainerButtons>
                  <ButtonsCard animated={animated} />
                </ContainerButtons>
              </MotiView>
            </AnimatePresence>
          </>
        </TouchableHighlight>
      </MotiView>
    </ContainerAnimated>
  )
}

export default ThumbnailCard
