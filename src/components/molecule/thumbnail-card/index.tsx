import React, { useRef } from 'react'
import { TouchableHighlight, View } from 'react-native'
import { useHover } from 'react-native-web-hooks'

import { MotiView } from 'moti'

import ThumbnailImage from '@/components/atom/thumbnail-image'

import colors from '@/global/colors'

type Props = {
  index: number
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

const ThumbnailCard = ({ item, width, height, image, index }: Props) => {
  const ref = useRef()
  const hovered = useHover(ref)

  const BORDER_RADIUS = 4
  const CARD_HEIGHT = height * 2
  const CARD_WIDTH = 320
  const TIME_ANIMATION = 100
  const DELAY = 0
  const SCALE = 0.9
  const BORDER_WIDTH = 2

  return (
    <MotiView
      ref={ref}
      key={index}
      animate={{
        scale: hovered ? 1.1 : SCALE,
        width: hovered ? CARD_WIDTH : width,
        height: hovered ? CARD_HEIGHT : height,
      }}
      transition={{ type: 'timing', delay: DELAY, duration: TIME_ANIMATION }}
      style={[
        {
          marginHorizontal: -12,
          margin: 2,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 1,
            height: 1,
          },
          backgroundColor: colors.card_background,
          borderRadius: 8,
        },
        hovered && {
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
              title={'Teste'}
              image={'/images/spiderman.jpg'}
              hover={hovered}
              maxWidth={CARD_WIDTH}
              borderRadius={BORDER_RADIUS}
              key={'image'}
            />
          </View>
          {hovered && (
            <MotiView
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'timing', duration: TIME_ANIMATION }}
              style={{ flex: 1 }}
            >
              {/*   <DescriptionMovie description={item.description} />
            <ButtonsCard /> */}
            </MotiView>
          )}
        </>
      </TouchableHighlight>
    </MotiView>
  )
}

export default ThumbnailCard
