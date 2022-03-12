import React from 'react'

import {
  GettersExhibitions,
  GettersExhibitionsWorks,
  TypesProducts,
} from '@/types'
import faker from '@faker-js/faker'

import CardExhibition from '../../molecule/card-exhibition'
import EventPhotos from '../../organism/event-photos'
import EventWorks from '../../organism/event-works'
import { Container } from './styles'

type Props = {
  item: GettersExhibitions
}

// exemplo de GettersExhibitionsWorks
const works: GettersExhibitionsWorks[] = [
  {
    id: 1,
    produtoId: 0,
    exibicaoId: 0,
    documentoId: 0,
    titulo: faker.name.title(),
    artista: faker.name.firstName() + ' ' + faker.name.lastName(),
    tecnica: faker.commerce.productMaterial(),
    edicao: faker.commerce.productAdjective(),
    impressao: faker.commerce.productAdjective(),
    moldura: faker.commerce.productAdjective(),
    ano: faker.date.past().getFullYear().toString(),
    dimencao: faker.commerce.productAdjective(),
    obra_original: false,
    tipo_de_arquivo: TypesProducts.PHOTOS,
    arquivo: faker.image.image(),
    nome_arquivo: faker.image.image(),
  },
  {
    id: 2,
    produtoId: 0,
    exibicaoId: 0,
    documentoId: 0,
    titulo: faker.name.title(),
    artista: faker.name.firstName() + ' ' + faker.name.lastName(),
    tecnica: faker.commerce.productMaterial(),
    edicao: faker.commerce.productAdjective(),
    impressao: faker.commerce.productAdjective(),
    moldura: faker.commerce.productAdjective(),
    ano: faker.date.past().getFullYear().toString(),
    dimencao: faker.commerce.productAdjective(),
    obra_original: false,
    tipo_de_arquivo: TypesProducts.PHOTOS,
    arquivo: faker.image.image(),
    nome_arquivo: faker.image.image(),
  },
]

const WorkPanel = ({ item }: Props) => {
  return (
    <Container>
      <CardExhibition
        disabled
        item={item}
        all
        style={{
          flex: 1,
          borderBottomWidth: 0,
        }}
      />

      <EventPhotos photos={item.photos} idExhibition={item.nome_unico} />
      <EventWorks works={works} idExhibition={item.nome_unico} />
    </Container>
  )
}

export default WorkPanel
