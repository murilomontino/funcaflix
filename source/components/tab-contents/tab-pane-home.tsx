import React, { useMemo } from 'react'

import { GetterProjects } from '@/domain/entities'
import { IGetterProduct } from '@/types/getters'

import SlideSwipper from '@/components/organism/slide-swipper'

type Product = {
  [key: string]: any
  category: number
  title: string
  id: string
  thumbnail: string
  description: string
}

type TabPaneHomeProps = {
  books: IGetterProduct[]
  opportunities: GetterProjects[]
  events: IGetterProduct[]
  participation?: IGetterProduct[]
  workshops: IGetterProduct[]
  tvProgramsPlaylist: IGetterProduct[]
}

const TabPaneHome = ({ books, events, opportunities, tvProgramsPlaylist, workshops, participation }: TabPaneHomeProps) => {

  const booksMemo = useMemo(
    () => books.filter((item) => item?.category == 2 && item?.thumbnail !== 'Não informado'),
    [books]
  )

  return (
    <React.Fragment>
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
          height="200px"
          link="eventos"
          itemsPerView={6.5}
          buttonText=""
        />

        {/* <SlideSwipper
          title="Participação"
          id="iq-participacao"
          disabled
          items={participation as unknown as Product[]}
          height="200px"
          link="participacao"
          itemsPerView={6.5}
          buttonText=""
        /> */}

        <SlideSwipper
          title="Oficinas"
          id="iq-workshops"
          disabled
          items={workshops as unknown as Product[]}
          height="200px"
          link="workshops"
          itemsPerView={6.5}
          buttonText=""
        />


      </div>
    </React.Fragment>
  )
}

export default TabPaneHome