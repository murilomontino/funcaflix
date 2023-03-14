import React from 'react'

import useFetchListCitiesOrSegments from '@/api/fetch-list-cities-or-segments'

import CulturalProfilesScreen from '@/screens/cultural-profiles-screen'

const CulturalProfiles = () => {
	const { data, isError, isLoading } = useFetchListCitiesOrSegments()

	if (isLoading || isError) {
		return null
	}

	return (
		<React.Fragment>
			<CulturalProfilesScreen cities={data.cities} segments={data.segments} />
		</React.Fragment>
	)
}

export default CulturalProfiles
