import React, { useState } from 'react'

import { AnimatePresence } from 'moti'

import ButtonsCard from '@/components/atom/buttons-card/buttons-card'
import DescriptionMovie from '@/components/atom/description-movie'
import ThumbnailImage from '@/components/atom/thumbnail-image'

import CardHovered from '../card-hovered'
import {
  Container,
  ContainerButtons,
  ContainerDescription,
  ContainerInformation,
  ContainerThumbnail,
} from './styles'

type AnimationBTNorCard =
  | {
      animated?: true
      isButton?: false
    }
  | {
      animated?: false
      isButton?: true
    }

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
} & React.HTMLAttributes<HTMLDivElement> &
  AnimationBTNorCard

const WIDTH_ITEM = 225
const HEIGHT_ITEM = 125

const ThumbnailCard = ({ index, item, animated = true, isButton = false, ...rest }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = (e) => {
    e.preventDefault()
    setIsHovered(true)
  }

  const handleMouseLeave = (e) => {
    e.preventDefault()
    setIsHovered(false)
  }

  return (
    <Container
      {...rest}
      className={`${isButton ? 'btn' : ''}`}
      style={{
        width: WIDTH_ITEM,
        height: HEIGHT_ITEM,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ContainerThumbnail
        style={{
          height: HEIGHT_ITEM,
        }}
      >
        <ThumbnailImage
          unblur
          image={item.image}
          width={WIDTH_ITEM}
          height={HEIGHT_ITEM}
          title={item.title}
        />
      </ContainerThumbnail>

      {isHovered && animated && (
        <CardHovered width={WIDTH_ITEM} index={index}>
          <>
            <ThumbnailImage
              image={item.image}
              width={WIDTH_ITEM}
              height={HEIGHT_ITEM}
              title={item.title}
            />
            <AnimatePresence>
              <ContainerInformation
                transition={{
                  type: 'timing',
                  delay: 50,
                  duration: 100,
                }}
              >
                <ContainerDescription>
                  <DescriptionMovie description={item.description} animated />
                </ContainerDescription>
                <ContainerButtons>
                  <ButtonsCard animated />
                </ContainerButtons>
              </ContainerInformation>
            </AnimatePresence>
          </>
        </CardHovered>
      )}
    </Container>
  )
}

export default ThumbnailCard
