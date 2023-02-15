import React from 'react'

import fetchListCitiesOrSegments from '@/api/fetch-list-cities-or-segments'

import CulturalProfilesScreen from '@/screens/cultural-profiles-screen'


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