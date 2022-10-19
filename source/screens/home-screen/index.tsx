import React, { useMemo } from 'react'
import { useScaledSize } from 'react-native-web-hooks'

import { GetterProjects } from '@/domain/entities'

import SlideSwipper from '@/components/organism/slide-swipper'

import CardCarousel from './components/organisms/card-carousel'

import { useResources } from '@/hooks/utils/use-resources'

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
  opportunities: GetterProjects[]
}

// 5 categorias

function HomeScreen({ books, tvProgramsPlaylist, newestProducts, opportunities }: Props) {
  const { isFontReady } = useResources()

  const WIDTH_NUMBER = 7
  const TEXT_NUMBER = 2

  const TEXT_SIZE = useScaledSize(TEXT_NUMBER)
  const WIDTH_LOGO = useScaledSize(WIDTH_NUMBER)

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
      {/* {isFontReady ? (
        <HeaderLogo widthLogo={WIDTH_NUMBER} textSize={TEXT_NUMBER} subTitle="" />
      ) : (
        <SkeletonHeadLogo width={WIDTH_LOGO} textSize={TEXT_SIZE} />
      )} */}
      <If condition={newestProductsMemo?.length > 0}>
        <CardCarousel items={newestProductsMemo} />
      </If>
      <div
        style={{
          marginTop: '75px',
          marginBottom: '10vh',
        }}
      >
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
