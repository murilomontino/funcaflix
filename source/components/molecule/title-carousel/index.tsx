import React, { useRef } from 'react'
import { useHover } from 'react-native-web-hooks'

import { Title, Container, ContainerText, SubTitle } from './styles'

import { useResources } from '@/hooks/utils/use-resources'

type Props = {
  title: string
}

const TitleCarousel = ({ title = 'Não Informado' }: Props) => {
  const { isFontReady } = useResources()

  const refMoti = useRef()
  const hovered = useHover(refMoti)

  if (!isFontReady) return null

  return (
    <Container>
      <ContainerText ref={refMoti}>
        <Title>{title}</Title>
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
