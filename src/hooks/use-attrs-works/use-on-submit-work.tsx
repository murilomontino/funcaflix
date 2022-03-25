import { GettersExhibitionsWorks, SettersExhibitionsWorks } from '@/types'

import api from '@/services'
import { Getter } from '@/services/config/types'

const useOnSubmitWork = () => {
  const submit = async (
    params: Omit<SettersExhibitionsWorks, 'name_uuid'>
  ): Promise<Getter<GettersExhibitionsWorks>> => {
    try {
      const { data } = await api.post<Getter<GettersExhibitionsWorks>>(
        `exhibitions/works/${params.nome_exibicao}`,
        params
      )

      return data
    } catch (error) {
      return { error: error.message, statusCode: 500 }
    }
  }

  return {
    submit,
  }
}

export default useOnSubmitWork
