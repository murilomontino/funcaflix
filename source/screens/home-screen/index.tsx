import React, { useMemo } from 'react'

import CardCarousel from './components/organisms/card-carousel'
import SlideSwipper from './components/organisms/slide-swipper'
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
      <CardCarousel />
      <div
        className="main-content"
        style={{
          marginTop: '-100px',
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
          items={playlist}
          link="programas-de-tv"
          buttonText="Assistir"
        />
        <div className="align-items-center p-lg-5">
          <EventCarousel />
        </div>
      </div>
    </>
  )
}

export default HomeScreen
