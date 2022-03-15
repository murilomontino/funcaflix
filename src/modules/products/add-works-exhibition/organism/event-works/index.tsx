import React, { useState } from 'react'

import BoxTopToDown from '@/animations/box-top-to-down'

import ToggleWindow from '@/components/atom/toggle-window'

import { useFormGetterWorks } from '@/forms/Product/product-works/hooks'

import CardWork from '../../molecule/card-work'
import NewWorksBox from '../new-works-box'
import { Container } from './styles'

type Props = {
  idExhibition: string
}

const EventWorks = ({ idExhibition }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const { getterWorks } = useFormGetterWorks()

  const renderWorks = () => {
    return (
      <BoxTopToDown isOpen={isOpen}>
        {getterWorks.map((photo) => (
          <CardWork horizontal key={photo.id} item={photo} idExhibition={idExhibition} />
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
