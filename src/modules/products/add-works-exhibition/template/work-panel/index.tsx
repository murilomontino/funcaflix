import React from 'react'

import { GettersExhibitions } from '@/types'

import FormProductWorksProvider from '@/forms/Product/product-works'

import CardExhibition from '../../molecule/card-exhibition'
import EventPhotos from '../../organism/event-photos'
import EventWorks from '../../organism/event-works'
import { Container } from './styles'

type Props = {
  item: GettersExhibitions
}

const WorkPanel = ({ item }: Props) => {
  return (
    <FormProductWorksProvider
      items={item.works}
      exibicao_id={item.id}
      nome_exibicao={item.nome_unico}
      produtoId={item.produtoId}
    >
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
        <EventWorks idExhibition={item.nome_unico} />
      </Container>
    </FormProductWorksProvider>
  )
}

export default WorkPanel
