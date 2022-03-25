import React, { useState } from 'react'

import BoxTopToDown from '@/animations/box-top-to-down'
import { GettersExhibitionsPhotos } from '@/types'

import ToggleWindow from '@/components/atom/toggle-window'

import AboutTheWork from '../../molecule/about-the-work'
import CardPhoto from '../../molecule/card-photo'
import { Container } from './styles'

type Props = {
  photos: GettersExhibitionsPhotos[]
  idExhibition: string
  title: string
  description?: string
  requeredDescription?: boolean
}

const EventPhotos = ({
  photos,
  idExhibition,
  title,
  description,
  requeredDescription = true,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const renderPhotos = () => {
    return (
      <BoxTopToDown
        scrollView
        scrollViewProps={{
          contentContainerStyle: {
            paddingBottom: 20,
          },
          horizontal: true,
          style: {
            flexDirection: 'row',
            flexWrap: 'wrap',
          },
        }}
        isOpen={isOpen}
        containerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {photos.map((photo) => (
          <CardPhoto
            key={photo.id}
            item={photo}
            idExhibition={idExhibition}
            resizeMode="stretch"
            description={requeredDescription}
            ContainerStyle={{
              width: 300,
              flex: 1,
            }}
          />
        ))}
      </BoxTopToDown>
    )
  }

  const renderDescription = () => {
    return (
      <BoxTopToDown isOpen={isOpen}>
        <AboutTheWork about={description} title="Biografia" fx={false} />
      </BoxTopToDown>
    )
  }

  return (
    <Container>
      <ToggleWindow isOpen={isOpen} onChangeOpen={setIsOpen} title={title} />
      {!!description && renderDescription()}
      {renderPhotos()}
    </Container>
  )
}

export default EventPhotos
