import React, { useState } from 'react'

import BoxTopToDown from '@/animations/box-top-to-down'

import ToggleWindow from '@/components/atom/toggle-window'

import { About, Container } from './styles'

type Props = {
  about: string
}

const AboutTheWork = ({ about }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const renderAbout = () => {
    return (
      <BoxTopToDown isOpen={isOpen}>
        <About>{about}</About>
      </BoxTopToDown>
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
