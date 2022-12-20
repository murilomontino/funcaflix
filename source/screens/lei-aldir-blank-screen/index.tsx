import React, { useMemo } from 'react'
import { GetterProjects } from '@/domain/entities'

import SlideSwipper from '@/components/organism/slide-swipper'
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
  opportunities: GetterProjects[]
}

function LeiAldirBlankPage({ books, opportunities }: Props) {

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
          items={booksMemo}
          height="280px"
          link="literatura"
          itemsPerView={6.5}
          buttonText="Ler"
        />

      </div>
    </>
  )
}

export default LeiAldirBlankPage
