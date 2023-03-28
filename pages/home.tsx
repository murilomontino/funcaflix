// @generated: @expo/next-adapter@2.1.52

import { CulturalProfileRepositorySequelize } from '@/domain/repositories'
import {
	FindAllNewestAudioVisual,
	FindAllOpportunities,
	FindAllPlaylistUseCase,
	FindAllProductsByCategory,
	FindByRandomProfileUseCase,
} from '@/domain/usecases'
import { CATEGORIES } from '@/types/constants'
import { build, database } from 'mapacultural-database'
import { GetStaticProps } from 'next/types'

import HomeScreen from '@/screens/home-screen'

const EM_BREVE = false

const App = ({
	books,
	tvPrograms,
	newestProducts,
	opportunities,
	profiles,
	audiovisual,
	events,
}) => {
	return (
		<HomeScreen
			books={books}
			newestProducts={newestProducts}
			tvProgramsPlaylist={tvPrograms}
			opportunities={opportunities}
			profiles={profiles}
			events={events}
			audioVisualPlaylist={audiovisual}
		/>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	await build()

	const promiseBooksOrErr = new FindAllProductsByCategory().execute(
		{},
		{ category: CATEGORIES.LITERATURE }
	)
	const promisePlaylistOrErr = new FindAllPlaylistUseCase().execute({})
	const promiseAudioVisualOrErr = new FindAllPlaylistUseCase().execute({
		category: [CATEGORIES.AUDIOVISUAL],
	})
	const promiseNewestProductsOrErr = new FindAllNewestAudioVisual().execute(
		{},
		{
			category: [CATEGORIES.AUDIOVISUAL],
			limit: 10,
		}
	)

	const promiseEventsOrErr = new FindAllProductsByCategory().execute(
		{},
		{ category: CATEGORIES.EVENT }
	)

	const promiseOpportunitiesOrErr = new FindAllOpportunities().execute({
		status: [1],
	})
	const promiseProfilesOrErr = new FindByRandomProfileUseCase(
		new CulturalProfileRepositorySequelize(database)
	).execute({
		length: 20,
	})

	const [
		booksOrErr,
		playlistOrErr,
		newestProductsOrErr,
		opportunitiesOrErr,
		profilesOrErr,
		audioVisualPlaylistOrErr,
		eventsOrErr,
	] = await Promise.all([
		promiseBooksOrErr,
		promisePlaylistOrErr,
		promiseNewestProductsOrErr,
		promiseOpportunitiesOrErr,
		promiseProfilesOrErr,
		promiseAudioVisualOrErr,
		promiseEventsOrErr,
	])

	const books = booksOrErr.isLeft() && booksOrErr.extract()
	const playlist = playlistOrErr.isLeft() && playlistOrErr.extract()
	const newestProducts =
		newestProductsOrErr.isLeft() && newestProductsOrErr.extract()
	const opportunities =
		opportunitiesOrErr.isLeft() && opportunitiesOrErr.extract()
	const profiles = profilesOrErr.isLeft() && profilesOrErr.extract()
	const audioVisualPlaylist =
		audioVisualPlaylistOrErr.isLeft() && audioVisualPlaylistOrErr.extract()

	const events = eventsOrErr.isLeft() && eventsOrErr.extract()

	return {
		props: {
			books: books || [],
			tvPrograms: playlist || [],
			newestProducts: newestProducts || [],
			opportunities: opportunities || [],
			profiles: profiles || [],
			audiovisual: audioVisualPlaylist || [],
			events: events || [],
		},
		revalidate: 60 * 60 * 24,
	}
}

export default App
