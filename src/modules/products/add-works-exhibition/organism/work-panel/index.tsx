import React from 'react'

import { GettersExhibitions } from '@/types'

import CardTag from '@/components/atom/card-tag'

import AboutTheWork from '../../molecule/about-the-work'
import EventPhotos from '../../molecule/event-photos'
import CardExhibition from '../card-exhibition'
import { Container } from './styles'

type Props = {
  item: GettersExhibitions
}

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
      <CardTag tags={item.tags} />
      <AboutTheWork about={item.sobre_a_obra} />
      <EventPhotos photos={item.photos} />
    </Container>
  )
}

export default WorkPanel
