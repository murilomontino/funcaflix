import React, { useEffect, useState } from 'react'

import { exhibitionPhotos } from '@/types'

import ToggleWindow from '@/components/atom/toggle-window'

import { About, Container, ContainerAbout } from './styles'

import useMoveBoxAnimation from '@/hooks/animations/use-move-down-box'

type Props = {
  photos: exhibitionPhotos[]
}

const EventPhotos = ({ photos }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const { animation, display, downMove, opacity, upMove } =
    useMoveBoxAnimation()

  useEffect(() => {
    if (isOpen) {
      downMove()
    } else {
      upMove()
    }
  }, [isOpen])

  const renderAbout = () => {
    return (
      <ContainerAbout
        style={{
          display: display,
          opacity,
          transform: [
            {
              //scaleY: openAnimation,
              translateY: animation,
            },
          ],
        }}
      >
        <About
          style={{
            opacity,
          }}
        >
          {photos}
        </About>
      </ContainerAbout>
    )
  }

  return (
    <Container>
      <ToggleWindow
        isOpen={isOpen}
        onChangeOpen={setIsOpen}
        title="Fotos do Evento"
      />
      {renderAbout()}
    </Container>
  )
}

export default EventPhotos
