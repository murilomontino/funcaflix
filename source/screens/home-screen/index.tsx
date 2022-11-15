import React, { useMemo } from 'react'
import { GetterProjects } from '@/domain/entities'

import SlideSwipper from '@/components/organism/slide-swipper'

import CardCarousel from './components/organisms/card-carousel'

import { If } from '@/utils/tsx-controls'
import { IGetterCulturalProfile } from '@/types/getters'
import CarouselSwipperProfiles from '@/components/molecule/carousel-swipper-profiles'

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
  opportunities: GetterProjects[]
  profiles: IGetterCulturalProfile[]
}

// 5 categorias

function HomeScreen({ books, tvProgramsPlaylist, newestProducts, opportunities, profiles }: Props) {
  const opportunitiesCarousel: Product[] = useMemo(() => {
    return opportunities.map((opportunity) => ({
      id: opportunity.id as unknown as string,
      title: opportunity.nameProject,
      description: opportunity.aboutProject,
      thumbnail: 'logo',
      category: 8,
    }))
  }, [opportunities])

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
      <If condition={newestProductsMemo?.length > 0}>
        <CardCarousel items={newestProductsMemo} />
      </If>
      <div
        style={{
          marginTop: '75px',
          marginBottom: '10vh',
        }}
      >
        <CarouselSwipperProfiles
          title="Perfis Culturais"
          id='iq-perfis-culturais'
          profiles={profiles}
        />

        <If condition={opportunitiesCarousel?.length > 0}>
          <SlideSwipper
            existLogo={false}
            title="oportunidades"
            id="iq-oportunidades"
            items={opportunitiesCarousel}
            height="200px"
            link="oportunidades"
            itemsPerView={6.5}
            buttonText="Ler"
          />
        </If>



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
