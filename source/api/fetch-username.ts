import { useQuery } from 'react-query';

import promiseErrorHandler from "@/helpers/error-handler";
import { ICulturalProfile } from "@/types/setters";

import api from "@/services";

const DAY = 60 * 60 * 24

type GetProps = {
    data: ICulturalProfile | null
    statusCode: number
}

const fetchUsernameProfile = (id: string) => {
    if (!id) return {
        data: null,
        isLoading: false,
        error: true
    }

    return useQuery(
        `profile-${id}`,
        async () => {
            const [
                [errProfile, responseProfile],
                [errEvents, responseEvents],
            ] = await Promise.all([
                promiseErrorHandler(
                    api.get<GetProps>(`/profiles/${id}`),
                ),
                promiseErrorHandler(
                    api.get<GetProps>(`/profiles/${id}/events`),
                ),
            ])

            if (errProfile) {
                throw new Error('Não foi possível fazer a requisição', { cause: errProfile })
            }

            const { data, statusCode } = responseProfile.data

            if (statusCode !== 200) {
                throw new Error(`Não foi possível fazer a requisição. Status code: ${statusCode}`, { cause: data })
            }

            return {
                profile: data as ICulturalProfile
            };
        },
        {
            staleTime: DAY,
        }
    )
}

export default fetchUsernameProfile