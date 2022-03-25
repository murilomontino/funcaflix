import React, { useState } from 'react'

import BoxTopToDown from '@/animations/box-top-to-down'

import ToggleWindow from '@/components/atom/toggle-window'

import { About, Container, Title } from './styles'

type Props = {
  about: string
  title?: string
  fx?: boolean
}

const AboutTheWork = ({ about, title = 'Sobre a Obra', fx = true }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  if (!fx) {
    return (
      <Container>
        <Title>{title}</Title>
        <About style={{ marginTop: 20 }}>{about}</About>
      </Container>
    )
  }

  const renderAbout = () => {
    return (
      <BoxTopToDown isOpen={isOpen}>
        <About>{about}</About>
      </BoxTopToDown>
    )
  }

  return (
    <Container>
      <ToggleWindow isOpen={isOpen} onChangeOpen={setIsOpen} title={title} />
      {renderAbout()}
    </Container>
  )
}

export default AboutTheWork
