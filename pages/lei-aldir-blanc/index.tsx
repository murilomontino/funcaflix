import React from 'react'

import { makeUseCaseFindAllEventsByFinancialResources } from '@/composers/events-composers/make-get-all-events-by-financial-resources-composer'
import { GetterProjects } from '@/domain/entities'
import { SequelizeProductsRepository } from '@/domain/repositories/products-repository'
import { FindAllProductsByFinancialResource } from '@/domain/usecases'
import { CATEGORIES, FINANCIAL_RESOURCES } from '@/types/constants'
import { IGetterEvent, IGetterProduct } from '@/types/getters'
import { build } from 'mapacultural-database'
import type { GetStaticProps } from 'next'

import LeiAldirBlankScreen from '@/screens/lei-aldir-blanc-screen'

type StaticProps = {
	books: IGetterProduct[]
	audiovisual: IGetterProduct[]
	opportunities: GetterProjects[]
	workshops: IGetterProduct[]
	events: IGetterEvent[]
}

const LeiAldirBlank = ({
	books,
	opportunities,
	events,
	audiovisual,
	workshops,
}: StaticProps) => {
	const key = React.useId()
	return (
		<LeiAldirBlankScreen
			key={key}
			opportunities={opportunities}
			books={books}
			events={events}
			// participation={staticParticipation}
			tvProgramsPlaylist={audiovisual}
			workshops={workshops}
		/>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	await build()

	const EventsUseCase = makeUseCaseFindAllEventsByFinancialResources()

	const repository = new SequelizeProductsRepository()

	const promiseBooks = new FindAllProductsByFinancialResource(repository)
		.defineCategory(CATEGORIES.LITERATURE)
		.execute(null, {
			financialResource: FINANCIAL_RESOURCES['lei-aldir-blanc'],
		})

	const promiseAudioVisual = new FindAllProductsByFinancialResource(repository)
		.defineCategory(CATEGORIES.AUDIOVISUAL)
		.execute(null, {
			financialResource: FINANCIAL_RESOURCES['lei-aldir-blanc'],
		})

	// const promiseOpportunities = new FindAllOpportunities().execute({
	// 	status: [1, 2],
	// 	params: {
	// 		where: {
	// 			idUser: 12110,
	// 		},
	// 	},
	// })

	const promiseWorkshopsOrErr = new FindAllProductsByFinancialResource(
		repository
	)
		.defineCategory(CATEGORIES.WORKSHOP)
		.execute(null, {
			financialResource: FINANCIAL_RESOURCES['lei-aldir-blanc'],
		})

	const promiseEventsOrErr = EventsUseCase.execute(null, {
		financialResources: FINANCIAL_RESOURCES['lei-aldir-blanc'],
	})

	const [
		booksOrErr,
		playlistOrErr,
		workshopsOrErr,
		eventsOrErr,
		// opportunitiesOrErr,
		// participationOrErr
	] = await Promise.all([
		promiseBooks,
		promiseAudioVisual,
		promiseWorkshopsOrErr,
		promiseEventsOrErr,
		// promiseOpportunities,
		// promiseParticipationOrErr
	])

	const books = booksOrErr.isLeft() && booksOrErr.extract()
	const playlist = playlistOrErr.isLeft() && playlistOrErr.extract()
	const workshops = workshopsOrErr.isLeft() && workshopsOrErr.extract()
	const events = eventsOrErr.isLeft() && eventsOrErr.extract()

	// const opportunities = opportunitiesOrErr.isLeft() && opportunitiesOrErr.extract()
	// const participation = participationOrErr.isLeft() && participationOrErr.extract()

	return {
		props: {
			books: books || [],
			audiovisual: playlist || [],
			opportunities: [],
			workshops: workshops || [],
			events: events || [],
			// staticParticipation: participation || [],
		},
		revalidate: 60 * 60 * 24,
	}
}

export default LeiAldirBlank
