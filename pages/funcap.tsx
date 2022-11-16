// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import {
  FindAllNewestAudioVisual,
  FindAllOpportunities,
  FindAllPlaylistUseCase,
  FindAllProductsByCategory,
  FindByRandomProfileUseCase,
} from '@/domain/usecases'

import { CulturalProfileRepositorySequelize } from '@/domain/repositories'

import { build } from 'mapacultural-database'
import { GetStaticProps } from 'next/types'

import ComingSoon from '@/screens/coming-soon-screen'
import HomeScreen from '@/screens/home-screen'

const EM_BREVE = false

export default function App({
  staticBooks,
  staticTvProgramsPlaylist,
  staticNewestProducts,
  staticOpportunities,
  staticProfiles,
  staticAudioVisualPlaylist,
}) {

  if (EM_BREVE) return (<React.Fragment><ComingSoon /></React.Fragment>)

  return (
    <HomeScreen
      books={staticBooks}
      newestProducts={staticNewestProducts}
      tvProgramsPlaylist={staticTvProgramsPlaylist}
      opportunities={staticOpportunities}
      profiles={staticProfiles}
      audioVisualPlaylist={staticAudioVisualPlaylist}
    />
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  await build()

  const promiseBooksOrErr = new FindAllProductsByCategory().execute({}, { category: '2', })
  const promisePlaylistOrErr = new FindAllPlaylistUseCase().execute({})
  const promiseAudioVisualOrErr = new FindAllPlaylistUseCase().execute({
    category: ['1'],
  })
  const promiseNewestProductsOrErr = new FindAllNewestAudioVisual().execute({}, { category: ['1', '152'], limit: 10, })
  const promiseOpportunitiesOrErr = new FindAllOpportunities().execute({ status: [1] })
  const promiseProfilesOrErr = new FindByRandomProfileUseCase(
    new CulturalProfileRepositorySequelize()
  ).execute({ length: 20 })

  const [
    booksOrErr,
    playlistOrErr,
    newestProductsOrErr,
    opportunitiesOrErr,
    profilesOrErr,
    audioVisualPlaylistOrErr,
  ] = await Promise.all([
    promiseBooksOrErr,
    promisePlaylistOrErr,
    promiseNewestProductsOrErr,
    promiseOpportunitiesOrErr,
    promiseProfilesOrErr,
    promiseAudioVisualOrErr,
  ])

  const books = booksOrErr.isLeft() && booksOrErr.extract()
  const playlist = playlistOrErr.isLeft() && playlistOrErr.extract()
  const newestProducts = newestProductsOrErr.isLeft() && newestProductsOrErr.extract()
  const opportunities = opportunitiesOrErr.isLeft() && opportunitiesOrErr.extract()
  const profiles = profilesOrErr.isLeft() && profilesOrErr.extract()
  const audioVisualPlaylist = audioVisualPlaylistOrErr.isLeft() && audioVisualPlaylistOrErr.extract()

  return {
    props: {
      staticBooks: books || [],
      staticTvProgramsPlaylist: playlist || [],
      staticNewestProducts: newestProducts || [],
      staticOpportunities: opportunities || [],
      staticProfiles: profiles || [],
      staticAudioVisualPlaylist: audioVisualPlaylist || [],
    },
    revalidate: 60 * 60 * 24,
  }
}
