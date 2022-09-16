// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import { CulturalProfileByCity, CulturalProfileRepositoryInMemory } from '@/domain/repositories'
import { GetStaticProps } from 'next/types'

import CulturalProfilesScreen from '@/screens/cultural-profiles-screen'

type Props = {
  profiles: CulturalProfileByCity[]
}

export default function CulturalProfiles({ profiles }: Props) {
  return <CulturalProfilesScreen profiles={profiles} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const culturalProfileRepository = new CulturalProfileRepositoryInMemory()
  const profiles = await culturalProfileRepository.findAllByCity()

  return {
    props: {
      profiles: profiles.isRight() ? [] : profiles.value,
    },
    revalidate: 60 * 60 * 24,
  }
}
