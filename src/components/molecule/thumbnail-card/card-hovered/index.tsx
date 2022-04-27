import React from 'react'
import { TouchableHighlight } from 'react-native'

import theme from '@/theme'
import { AnimatePresence, MotiView } from 'moti'

import ButtonsCard from '@/components/atom/buttons-card/buttons-card'
import DescriptionMovie from '@/components/atom/description-movie'
import ThumbnailImage from '@/components/atom/thumbnail-image'

import { ContainerButtons, ContainerDescription } from '../styles'

type Props = {
  hovered: boolean
  item: {
    id: string | number
    title: string
    thumbnail: string
    description: string
  }
  image: string
  isBoxDescription?: boolean
  animated?: boolean
}

const CardHovered = ({ hovered, image, item, animated, isBoxDescription }: Props) => {
  return (
    <TouchableHighlight style={{ flex: 1, width: '100%' }}>
      <>
        <div
          style={{
            zIndex: 999,
            height: '50%',
          }}
        >
          <ThumbnailImage
            title={item.title}
            image={image}
            hover={true}
            key={item.id}
            animate={{
              scale: hovered ? 1.0 : 0.9,
            }}
          />
        </div>
        <AnimatePresence>
          <MotiView
            transition={{
              type: 'timing',
              delay: 50,
              duration: 100,
            }}
            style={{
              flex: 1,
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
              <DescriptionMovie description={item.description} animated={hovered} />
            </ContainerDescription>
            <ContainerButtons>
              <ButtonsCard animated={hovered} />
            </ContainerButtons>
          </MotiView>
        </AnimatePresence>
      </>
    </TouchableHighlight>
  )
}

export default CardHovered
