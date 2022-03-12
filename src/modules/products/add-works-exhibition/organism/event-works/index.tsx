import React, { useState } from 'react'

import BoxTopToDown from '@/animations/box-top-to-down'
import { GettersExhibitionsWorks } from '@/types'

import ToggleWindow from '@/components/atom/toggle-window'

import CardWork from '../../molecule/card-work'
import NewWorksBox from '../new-works-box'
import { Container } from './styles'

type Props = {
  works: GettersExhibitionsWorks[]
  idExhibition: string
}

const EventWorks = ({ works, idExhibition }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const renderWorks = () => {
    return (
      <BoxTopToDown isOpen={isOpen}>
        {works.map((photo) => (
          <CardWork
            horizontal
            key={photo.id}
            item={photo}
            idExhibition={idExhibition}
          />
        ))}
        <NewWorksBox idExhibition={idExhibition} />
      </BoxTopToDown>
    )
  }
  return (
    <Container>
      <ToggleWindow isOpen={isOpen} onChangeOpen={setIsOpen} title="Obras" />
      {renderWorks()}
    </Container>
  )
}

export default EventWorks
