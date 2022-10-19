// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import {
  CulturalProfileByCity,
  CulturalProfileBySegment,
  CulturalProfileRepositorySequelize,
} from '@/domain/repositories'
import { FindAllCulturalProfilesBySegmentUseCase } from '@/domain/usecases'
import { GetStaticProps } from 'next/types'

import CulturalProfilesScreen from '@/screens/cultural-profiles-screen'

type Props = {
  profiles: CulturalProfileByCity[] | CulturalProfileBySegment[]
}

export default function CulturalProfiles({ profiles }: Props) {
  return <CulturalProfilesScreen profiles={profiles} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const use_case = new FindAllCulturalProfilesBySegmentUseCase(
    new CulturalProfileRepositorySequelize()
  )
  const profiles = await use_case.execute()

  return {
    props: {
      profiles: profiles.isRight() ? [] : profiles.value,
    },
    revalidate: 60 * 60,
  }
}
