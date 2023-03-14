import React from 'react'

import { GetterProduct, GetterProjects } from '@/domain/entities'
import { IGetterCulturalProfile, IGetterEvent } from '@/types/getters'

import CarouselSwipperProfiles from '@/components/molecule/carousel-swipper-profiles'
import SlideSwipper from '@/components/organism/slide-swipper'
import CardCarousel from './components/organisms/card-carousel'

import useFilterThumbnail from '@/hooks/use-filter-thumbnail'
import useMapMemoItems from '@/hooks/use-map-memo-items'

import Advertisement from '@/components/molecule/advertisement'
import mapOpportunityForProduct from '@/utils/map-opportunity-for-product'

type Props = {
	books: GetterProduct[]
	tvProgramsPlaylist: GetterProduct[]
	audioVisualPlaylist: GetterProduct[]
	newestProducts: GetterProduct[]
	opportunities: GetterProjects[]
	profiles: IGetterCulturalProfile[]
	events: IGetterEvent[]
}

// 5 categorias

function HomeScreen({
	books,
	tvProgramsPlaylist,
	newestProducts,
	opportunities,
	profiles,
	audioVisualPlaylist,
	events,
}: Props) {
	const opportunitiesCarousel = useMapMemoItems({
		items: opportunities,
		mapFunction: mapOpportunityForProduct,
	})
	const booksMemo = useFilterThumbnail({
		items: books,
		condition: (item) => item?.category == 2,
	})
	const playlistTvPrograms = useFilterThumbnail({ items: tvProgramsPlaylist })
	const newestProductsMemo = useFilterThumbnail({ items: newestProducts })
	const playlistAudioVisual = useFilterThumbnail({ items: audioVisualPlaylist })
	const eventsMemo = useFilterThumbnail({ items: events })

	return (
		<React.Fragment>
			<CardCarousel items={newestProductsMemo} />
			<div
				className="container-fluid"
				style={{
					marginTop: '-8vh',
				}}
			>
				{/* <ParticipationButton /> */}
				<Advertisement />
				<CarouselSwipperProfiles
					title="Perfis Culturais"
					id="iq-perfis-culturais"
					profiles={profiles}
				/>

				<SlideSwipper
					endpoint="project/"
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

				<SlideSwipper
					title="Eventos"
					id="iq-eventos"
					disabled
					height="200px"
					items={eventsMemo}
					buttonText="Ver"
					allLink="eventos"
				/>

				<SlideSwipper
					title="Programas de TV"
					id="iq-tv"
					height="200px"
					items={playlistTvPrograms}
					buttonText="Assistir"
					allLink="programas-de-tv"
					link="video"
				/>

				<SlideSwipper
					title="AudioVisual"
					id="iq-audiovisual"
					height="200px"
					items={playlistAudioVisual}
					buttonText="Assistir"
					allLink="audiovisual"
					link="video"
				/>
			</div>
		</React.Fragment>
	)
}

export default HomeScreen
