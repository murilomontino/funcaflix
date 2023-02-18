import React from 'react'

import { GetterProduct, GetterProjects } from '@/domain/entities'
import { IGetterCulturalProfile } from '@/types/getters'

import Advertisement from '@/components/molecule/advertisement'
import CarouselSwipperProfiles from '@/components/molecule/carousel-swipper-profiles'
import SlideSwipper from '@/components/organism/slide-swipper'

import CardCarousel from './components/organisms/card-carousel'



import useFilterThumbnail from '@/hooks/use-filter-thumbnail'
import useMapMemoItems from '@/hooks/use-map-memo-items'

import mapOpportunityForProduct from '@/utils/map-opportunity-for-product'
import { If } from '@/utils/tsx-controls'


type Props = {
  books: GetterProduct[]
  tvProgramsPlaylist: GetterProduct[]
  audioVisualPlaylist: GetterProduct[]
  newestProducts: GetterProduct[]
  opportunities: GetterProjects[]
  profiles: IGetterCulturalProfile[]
}

// 5 categorias

function HomeScreen({ books, tvProgramsPlaylist, newestProducts, opportunities, profiles, audioVisualPlaylist }: Props) {

  const opportunitiesCarousel = useMapMemoItems({ items: opportunities, mapFunction: mapOpportunityForProduct })
  const booksMemo = useFilterThumbnail({ items: books, condition: (item) => item?.category == 2 })
  const playlistTvPrograms = useFilterThumbnail({ items: tvProgramsPlaylist })
  const newestProductsMemo = useFilterThumbnail({ items: newestProducts })
  const playlistAudioVisual = useFilterThumbnail({ items: audioVisualPlaylist })

  return (
    <React.Fragment>
      <If condition={newestProductsMemo?.length > 0}>
        <CardCarousel items={newestProductsMemo} />
      </If>
      <div style={{
        marginTop: '-8vh',
      }}>
        <Advertisement />
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
    </React.Fragment>
  )
}

export default HomeScreen
