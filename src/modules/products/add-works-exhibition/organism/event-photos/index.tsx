import React, { useState } from 'react'

import BoxTopToDown from '@/animations/box-top-to-down'
import { GettersExhibitionsPhotos } from '@/types'

import ToggleWindow from '@/components/atom/toggle-window'

import CardPhoto from '../../molecule/card-photo'
import { Container } from './styles'

type Props = {
  photos: GettersExhibitionsPhotos[]
  idExhibition: string
}

const EventPhotos = ({ photos, idExhibition }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const renderPhotos = () => {
    return (
      <BoxTopToDown isOpen={isOpen}>
        {photos.map((photo) => (
          <CardPhoto
            horizontal
            key={photo.id}
            item={photo}
            idExhibition={idExhibition}
          />
        ))}
      </BoxTopToDown>
    )
  }
  return (
    <Container>
      <ToggleWindow
        isOpen={isOpen}
        onChangeOpen={setIsOpen}
        title="Fotos do Evento"
      />
      {renderPhotos()}
    </Container>
  )
}

export default EventPhotos
