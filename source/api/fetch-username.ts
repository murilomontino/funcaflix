import { useQuery } from 'react-query'

import promiseErrorHandler from '@/helpers/error-handler'
import { IGetterEvent, IGetterProduct } from '@/types/getters'
import { ICulturalProfile } from '@/types/setters'

import api from '@/services'

const DAY = 60 * 60 * 24

const useFetchUsernameProfile = (id: string) => {
	return useQuery(
		`profile-${(id || 'undefined').toLowerCase()}`,
		async () => {
			if (!id) return

			const [
				[errProfile, responseProfile],
				[errEvents, responseEvents],
				[errLiterature, responseLiterature],
				[errAudioVisual, responseAudioVisual],
				[errMusics, responseMusics],
				[errWorkshops, responseWorkshops],
			] = await Promise.all([
				promiseErrorHandler(api.get<ICulturalProfile>(`/profiles/${id}`)),
				promiseErrorHandler(api.get<IGetterEvent[]>(`/events/user/${id}`)),
				promiseErrorHandler(
					api.get<IGetterProduct[]>(`/profiles/${id}/literature`)
				),
				promiseErrorHandler(
					api.get<IGetterProduct[]>(`/profiles/${id}/audiovisual`)
				),
				promiseErrorHandler(
					api.get<IGetterProduct[]>(`/profiles/${id}/musics`)
				),
				promiseErrorHandler(
					api.get<IGetterProduct[]>(`/profiles/${id}/workshops`)
				),
			])

			if (errProfile) {
				throw new Error('Não foi possível fazer a requisição', {
					cause: errProfile,
				})
			}

			const { data: profile, status } = responseProfile

			if (status !== 200) {
				throw new Error(
					`A Requisição apresentou problemas. Status code: ${status}`,
					{
						cause: profile,
					}
				)
			}

			const events = !errEvents ? responseEvents.data : []
			const literature = !errLiterature ? responseLiterature.data : []
			const audiovisual = !errAudioVisual ? responseAudioVisual.data : []
			const musics = !errMusics ? responseMusics.data : []
			const workshops = !errWorkshops ? responseWorkshops.data : []

			return {
				profile,
				events,
				literature,
				audiovisual,
				musics,
				workshops,
			}
		},
		{
			staleTime: DAY,
		}
	)
}

export default useFetchUsernameProfile
