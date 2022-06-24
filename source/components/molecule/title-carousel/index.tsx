import React, { useState } from 'react'

import { Title, Container, ContainerText, SubTitle } from './styles'

import { useResources } from '@/hooks/utils/use-resources'

type Props = {
  title: string
  animation?: boolean
  lg?: boolean
  isButton?: boolean
}

const TitleCarousel = ({
  title = 'Não Informado',
  animation = true,
  lg = false,
  isButton = true,
}: Props) => {
  const [hovered, setHovered] = useState(false)
  const { isFontReady } = useResources()

  const handleHover = () => {
    setHovered(true && animation)
  }

  const handleLeave = () => {
    setHovered(false && animation)
  }

  if (!isFontReady) return null

  return (
    <Container onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <ContainerText disabled={!isButton}>
        <Title lg={lg}>{title}</Title>
        <SubTitle
          animate={{
            opacity: hovered ? 1 : 0,
            translateX: hovered ? 0 : -20,
          }}
          transition={{ type: 'timing', delay: 0, duration: 100 }}
        >
          Ver Tudo
        </SubTitle>
      </ContainerText>
    </Container>
  )
}

export default TitleCarousel
