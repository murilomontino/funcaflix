import { useQuery } from 'react-query'

import api from '@/services'
import requests from '@/services/config/requests'

export const fetchPlaylistAsync = () => {
  return useQuery(
    `tv-programs/playlist`,
    async () => {
      const { data } = await api.get(requests.TVPrograms.fetchPlaylist)

      if (data.statusCode === 200) {
        return data.data
      }
    },
    {
      staleTime: 3600,
    }
  )
}
