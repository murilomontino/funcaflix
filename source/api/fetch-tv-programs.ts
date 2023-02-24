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

export const fetchNewestVideosAsync = () => {
	return useQuery(
		`tv-programs/newest-videos`,
		async () => {
			const { data } = await api.get(requests.TVPrograms.fetchNewestVideos, {
				params: {
					pageSize: 10,
				},
			})

			if (data.statusCode === 200) {
				return data.data
			}
		},
		{
			staleTime: 3600,
		}
	)
}
export const fetchPlaylistItemsAsync = () => {
	return useQuery(
		`tv-programs/items`,
		async () => {
			const { data } = await api.get(requests.TVPrograms.fetchPlaylistItems)

			if (data.statusCode === 200) {
				return data.data
			}
		},
		{
			staleTime: 3600,
		}
	)
}
