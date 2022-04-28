import React, { useState } from 'react'

import theme from '@/theme'
import { AnimatePresence, MotiView } from 'moti'

import ButtonsCard from '@/components/atom/buttons-card/buttons-card'
import DescriptionMovie from '@/components/atom/description-movie'
import ThumbnailImage from '@/components/atom/thumbnail-image'

import CardHovered from '../card-hovered'
import { ContainerButtons, ContainerDescription } from './styles'

type Props = {
  height?: number
  width?: number
  index: number
  item: {
    id: number | string
    title: string
    description: string
    image: string
  }
}

const ThumbnailCard = ({ index, item, height, width }: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  const [image] = useState(item.image)

  const handleMouseEnter = (e) => {
    e.preventDefault()
    setIsHovered(true)
  }

  const handleMouseLeave = (e) => {
    e.preventDefault()
    setIsHovered(false)
  }

  return (
    <div
      style={{
        width: width,
        height: height,
        marginRight: 5,
        overflow: 'hidden',
        cursor: 'pointer',
        color: 'white',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          display: 'flex',
          flex: 1,
          height: height,
          width: '100%',
        }}
      >
        <ThumbnailImage image={image} width={width} height={height} title={item.title} />
      </div>

      {isHovered && (
        <CardHovered width={width} index={index}>
          <>
            <ThumbnailImage image={image} width={width} height={height} title={item.title} />
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
                  <DescriptionMovie description={item.description} animated />
                </ContainerDescription>
                <ContainerButtons>
                  <ButtonsCard animated />
                </ContainerButtons>
              </MotiView>
            </AnimatePresence>
          </>
        </CardHovered>
      )}
    </div>
  )
}

export default ThumbnailCard
