import React, { useEffect, useState } from 'react'

import ToggleWindow from '@/components/atom/toggle-window'

import { About, Container, ContainerAbout } from './styles'

import useMoveBoxAnimation from '@/hooks/animations/use-move-down-box'

type Props = {
  about: string
}

const AboutTheWork = ({ about }: Props) => {
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
          {about}
        </About>
      </ContainerAbout>
    )
  }

  return (
    <Container>
      <ToggleWindow
        isOpen={isOpen}
        onChangeOpen={setIsOpen}
        title="Sobre a Obra"
      />
      {renderAbout()}
    </Container>
  )
}

export default AboutTheWork
