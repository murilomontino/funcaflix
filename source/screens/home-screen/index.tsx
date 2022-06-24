import React, { useMemo } from 'react'

import SlideSwipper from '@/components/organism/slide-swipper'

import CardCarousel from './components/organisms/card-carousel'
import EventCarousel from './components/template/event-carousel'

type Props = {
  items: {
    [key: string]: any
    category: number
  }[]
  tvProgramsPlaylist: {
    [key: string]: any
  }
}

// 5 categorias

function HomeScreen({ items, tvProgramsPlaylist }: Props) {
  const books = useMemo(
    () => items.filter((item) => item?.category == 2 && item?.thumbnail !== 'Não informado'),
    [items]
  )

  const playlist = useMemo(
    () => tvProgramsPlaylist.filter((item) => item?.thumbnail !== 'Não informado'),
    [tvProgramsPlaylist]
  )

  return (
    <>
      <CardCarousel items={playlist} />
      <div
        style={{
          marginTop: '-75px',
          marginBottom: '10vh',
        }}
      >
        <SlideSwipper
          title="Literatura"
          id="iq-literatura"
          items={books}
          height="280px"
          link="literatura"
          itemsPerView={6.5}
          buttonText="Ler"
        />
        <SlideSwipper
          title="Programas de TV"
          id="iq-tv"
          height="200px"
          items={playlist}
          buttonText="Assistir"
          allLink="programas-de-tv"
          link="video"
        />

        <div className="align-items-center px-lg-5">
          <EventCarousel />
        </div>
      </div>
    </>
  )
}

export default HomeScreen
