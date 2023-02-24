import { useQuery } from 'react-query'

import api from '@/services'
import requests from '@/services/config/requests'

export const fetchProductByCategoryAsync = (category) => {
	return useQuery(
		`product-by-category-${category}`,
		async () => {
			const { data } = await api.get(requests.Product.fetchByCategory(category))

			if (data.statusCode === 200) {
				return data.data
			}
		},
		{
			staleTime: 3600,
		}
	)
}
