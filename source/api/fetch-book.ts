import { useQuery } from 'react-query'

import api from '@/services'
import requests from '@/services/config/requests'

export const useFetchBookByIDAsync = (id) => {
	return useQuery(
		`book-${id || 'dont-exists'}`,
		async () => {
			if (!id) return { data: null }

			const { data, status } = await api.get(requests.Book.fetchByID(id))

			if (status !== 200) {
				throw new Error('Error fetching book')
			}
			return data
		},
		{
			staleTime: 3600,
		}
	)
}
