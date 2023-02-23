import React from 'react'

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
	opportunities: IGetterProduct[]
	events: IGetterProduct[]
	participation?: IGetterProduct[]
	workshops: IGetterProduct[]
	tvProgramsPlaylist: IGetterProduct[]
}

const TabPaneHome = ({
	books,
	events,
	opportunities,
	tvProgramsPlaylist,
	workshops,
	participation,
}: TabPaneHomeProps) => {
	return (
		<React.Fragment>
			<div>
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
					title="Eventos"
					id="iq-eventos"
					disabled
					items={events}
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
					items={workshops}
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
