import { GetterProjects } from '@/domain/entities'
import React from 'react'

import SlideSwipper from '@/components/organism/slide-swipper'

import CardCarousel from './components/organisms/card-carousel'

import Advertisement from '@/components/molecule/advertisement'
import CarouselSwipperProfiles from '@/components/molecule/carousel-swipper-profiles'
import { IGetterCulturalProfile } from '@/types/getters'
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
  audioVisualPlaylist: Product[]
  newestProducts: Product[]
  opportunities: GetterProjects[]
  profiles: IGetterCulturalProfile[]
}

// 5 categorias

function HomeScreen({ books, tvProgramsPlaylist, newestProducts, opportunities, profiles, audioVisualPlaylist }: Props) {

  const opportunitiesCarousel: Product[] = React.useMemo(() => {
    return opportunities.map((opportunity) => ({
      id: opportunity.id as unknown as string,
      title: opportunity.nameProject,
      description: opportunity.aboutProject,
      thumbnail: opportunity.thumbnail || 'logo',
      category: 8,
    }))
  }, [opportunities])

  const booksMemo = React.useMemo(
    () => books.filter((item) => item?.category == 2 && item?.thumbnail !== 'Não informado'),
    [books]
  )

  const playlistTvPrograms = React.useMemo(
    () => tvProgramsPlaylist.filter((item) => item?.thumbnail !== 'Não informado'),
    [tvProgramsPlaylist]
  )

  const newestProductsMemo = React.useMemo(
    () => newestProducts.filter((item) => item?.thumbnail !== 'Não informado'),
    [newestProducts]
  )

  const playlistAudioVisual = React.useMemo(
    () => audioVisualPlaylist.filter((item) => item?.thumbnail !== 'Não informado'),
    [audioVisualPlaylist]
  )

  return (
    <>
      <If condition={newestProductsMemo?.length > 0}>
        <CardCarousel items={newestProductsMemo} />
      </If>
      <div style={{
        marginTop: '-8vh',
      }}>
        <CarouselSwipperProfiles
          title="Perfis Culturais"
          id='iq-perfis-culturais'
          profiles={profiles}
        />

        <If condition={opportunitiesCarousel?.length > 0}>
          <SlideSwipper
            endpoint='project/'
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

        <If condition={playlistTvPrograms?.length > 0}>
          <SlideSwipper
            title="Programas de TV"
            id="iq-tv"
            height="200px"
            items={playlistTvPrograms}
            buttonText="Assistir"
            allLink="programas-de-tv"
            link="video"
          />
        </If>

        <If condition={playlistAudioVisual?.length > 0}>
          <SlideSwipper
            title="AudioVisual"
            id="iq-audiovisual"
            height="200px"
            items={playlistAudioVisual}
            buttonText="Assistir"
            allLink="audiovisual"
            link="video"
          />
        </If>
      </div>
    </>
  )
}

export default HomeScreen
