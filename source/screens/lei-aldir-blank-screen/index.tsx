import React, { useMemo } from 'react'
import { GetterProjects } from '@/domain/entities'

import SlideSwipper from '@/components/organism/slide-swipper'
import { If } from '@/utils/tsx-controls'
import { IGetterProduct } from '@/types/getters'

type Product = {
  [key: string]: any
  category: number
  title: string
  id: string
  thumbnail: string
  description: string
}

type Props = {
  books: IGetterProduct[]
  opportunities: GetterProjects[]
  events: IGetterProduct[]
  participation: IGetterProduct[]
  workshops: IGetterProduct[]
  tvProgramsPlaylist: IGetterProduct[]
}

function LeiAldirBlankPage({ books, opportunities, events, participation, tvProgramsPlaylist, workshops }: Props) {

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


  return (
    <>
      <If condition={opportunitiesCarousel?.length > 0}>
        <SlideSwipper
          existLogo={false}
          endpoint="project/"
          title="oportunidades"
          id="iq-oportunidades"
          items={opportunitiesCarousel}
          height="200px"
          link="oportunidades"
          itemsPerView={6.5}
          buttonText="Ler"
        />
      </If>
      <div>

        <SlideSwipper
          title="Literatura"
          id="iq-literatura"
          items={booksMemo as unknown as Product[]}
          height="280px"
          link="literatura"
          itemsPerView={6.5}
          buttonText="Ler"
        />

        <SlideSwipper
          title="Eventos"
          id="iq-eventos"
          disabled
          items={events as unknown as Product[]}
          height="280px"
          link="eventos"
          itemsPerView={6.5}
          buttonText=""
        />

        <SlideSwipper
          title="Participação"
          id="iq-participacao"
          disabled
          items={participation as unknown as Product[]}
          height="280px"
          link="participacao"
          itemsPerView={6.5}
          buttonText=""
        />

        <SlideSwipper
          title="Oficinas"
          id="iq-workshops"
          disabled
          items={workshops as unknown as Product[]}
          height="280px"
          link="workshops"
          itemsPerView={6.5}
          buttonText=""
        />


      </div>
    </>
  )
}

export default LeiAldirBlankPage
