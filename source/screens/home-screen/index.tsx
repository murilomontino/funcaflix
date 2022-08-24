import React, { useMemo } from 'react'

import SlideSwipper from '@/components/organism/slide-swipper'

import CardCarousel from './components/organisms/card-carousel'
import EventCarousel from './components/template/event-carousel'

import { If } from '@/utils/tsx-controls'

type Product = {
  [key: string]: any
  category: number
  title: string
  id: string
  thumbnail: string
  description: string
}

type Props = {
  books: Product[]
  tvProgramsPlaylist: Product[]
  newestProducts: Product[]
}

// 5 categorias

function HomeScreen({ books, tvProgramsPlaylist, newestProducts }: Props) {
  const booksMemo = useMemo(
    () => books.filter((item) => item?.category == 2 && item?.thumbnail !== 'Não informado'),
    [books]
  )

  const playlist = useMemo(
    () => tvProgramsPlaylist.filter((item) => item?.thumbnail !== 'Não informado'),
    [tvProgramsPlaylist]
  )

  const newestProductsMemo = useMemo(
    () => newestProducts.filter((item) => item?.thumbnail !== 'Não informado'),
    [newestProducts]
  )

  return (
    <>
      <div className="align-items-center px-lg-5">
        <EventCarousel />
      </div>
      <If condition={newestProductsMemo?.length > 0}>
        <CardCarousel items={newestProductsMemo} />
      </If>
      <div
        style={{
          marginTop: '-75px',
          marginBottom: '10vh',
        }}
      >
        <SlideSwipper
          title="Literatura"
          id="iq-literatura"
          items={booksMemo}
          height="280px"
          link="literatura"
          itemsPerView={6.5}
          buttonText="Ler"
        />

        <If condition={playlist?.length > 0}>
          <SlideSwipper
            title="Programas de TV"
            id="iq-tv"
            height="200px"
            items={playlist}
            buttonText="Assistir"
            allLink="programas-de-tv"
            link="video"
          />
        </If>
      </div>
    </>
  )
}

export default HomeScreen
