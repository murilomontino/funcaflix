import React from 'react'

import CulturalProfilesScreen from '@/screens/cultural-profiles-screen'

import fetchListCitiesOrSegments from '@/api/fetch-list-cities-or-segments'

const CulturalProfiles = () => {

  const { data, isError, isLoading } = fetchListCitiesOrSegments()


  if (isLoading || isError) {
    return null
  }

  return (
    <CulturalProfilesScreen cities={data.cities} segments={data.segments} />
  )
}

export default CulturalProfiles