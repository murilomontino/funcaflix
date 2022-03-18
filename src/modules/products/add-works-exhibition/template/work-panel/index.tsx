import React, { useMemo } from 'react'

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
  const works = useMemo(() => {
    return item.works.filter((work) => work.exibicaoId === item.id)
  }, [item])

  const photos = useMemo(() => {
    return item.photos.filter((photo) => photo.exibicaoId === item.id)
  }, [item])

  const artistPhotos = useMemo(() => {
    return item.artistPhotos.filter((photo) => photo.exibicaoId === item.id)
  }, [item])

  return (
    <FormProductWorksProvider
      items={works}
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
        <EventPhotos
          photos={artistPhotos}
          idExhibition={item.nome_unico}
          title="Artista"
          description={item.biografia}
          requeredDescription={false}
        />
        <EventPhotos photos={photos} idExhibition={item.nome_unico} title="Fotos do Evento" />
        <EventWorks idExhibition={item.nome_unico} />
      </Container>
    </FormProductWorksProvider>
  )
}

export default WorkPanel
