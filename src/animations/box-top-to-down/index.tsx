import React, { useEffect } from 'react'

import useMoveBoxAnimation from '@/animations/box-top-to-down/use-move-down-box'

import { Container } from './styles'

type Props = {
  isOpen: boolean
  onChangeOpen?: (isOpen: boolean) => void
  children: React.ReactNode
}

const BoxToDown = ({ children, isOpen }: Props) => {
  const { animation, display, downMove, opacity, upMove } =
    useMoveBoxAnimation()

  useEffect(() => {
    if (isOpen) {
      downMove()
    } else {
      upMove()
    }
  }, [isOpen])

  return (
    <Container
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
      {children}
    </Container>
  )
}

export default BoxToDown
