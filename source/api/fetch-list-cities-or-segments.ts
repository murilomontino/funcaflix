import { useQuery } from 'react-query'

import api from '@/services'
import requests from '@/services/config/requests'

const useFetchListCitiesOrSegments = () => {
	return useQuery(`profiles-list-cities-or-segments`, async () => {
		const [citiesResponse, segmentsResponse] = await Promise.all([
			api.get(requests.Profiles.fetchCities),
			api.get(requests.Profiles.fetchSegments),
		])

		if (citiesResponse.status !== 200 && segmentsResponse.status !== 200) {
			throw new Error('Error fetching cities or segments')
		}

		const { data: citiesData } = citiesResponse
		const { data: segmentsData } = segmentsResponse

		return {
			cities: citiesData as string[],
			segments: segmentsData as string[],
		}
	})
}

export default useFetchListCitiesOrSegments
