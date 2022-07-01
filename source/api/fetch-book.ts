import { useQuery } from 'react-query'

import api from '@/services'
import requests from '@/services/config/requests'

export const fetchBookByIDAsync = (id) => {
  if (!id) return { data: null, error: true, isLoading: true }

  return useQuery(
    `book-${id}`,
    async () => {
      const { data } = await api.get(requests.Book.fetchByID(id))

      if (data.statusCode === 200) {
        return data.data
      }
    },
    {
      staleTime: 3600,
    }
  )
}
