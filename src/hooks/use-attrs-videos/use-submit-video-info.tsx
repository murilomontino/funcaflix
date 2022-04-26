import { Category, GettersVideosInfo, SettersVideosInfo } from '@/types'

import api from '@/services'
import { Getter } from '@/services/config/types'

export const useSubmitVideoInfo = () => {
  const submit = async (document: SettersVideosInfo): Promise<Getter<GettersVideosInfo>> => {
    try {
      const { data } = await api.post<Getter<GettersVideosInfo>>('videos/info', {
        ...document,
        categoria: Category.Video,
      })

      return data
    } catch (error) {
      return { error: error.message, statusCode: 500 }
    }
  }

  return {
    submit,
  }
}
