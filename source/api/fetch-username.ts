import { useQuery } from 'react-query'

import promiseErrorHandler from '@/helpers/error-handler'
import { IGetterEvent } from '@/types/getters'
import { ICulturalProfile } from '@/types/setters'

import api from '@/services'

const DAY = 60 * 60 * 24

const useFetchUsernameProfile = (id: string) => {
	return useQuery(
		`profile-${(id || 'vazio').toLowerCase()}`,
		async () => {
			if (!id) return

			const [[errProfile, responseProfile], [errEvents, responseEvents]] =
				await Promise.all([
					promiseErrorHandler(api.get<ICulturalProfile>(`/profiles/${id}`)),
					promiseErrorHandler(api.get<IGetterEvent[]>(`/events/user/${id}`)),
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

			console.log(events)

			return {
				profile,
				events,
			}
		},
		{
			staleTime: DAY,
		}
	)
}

export default useFetchUsernameProfile
