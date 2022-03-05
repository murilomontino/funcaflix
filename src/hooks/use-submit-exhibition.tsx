import { Category, GettersExhibitions, SettersExhibitions } from '@/types'

import api from '@/services'
import { Getter } from '@/services/config/types'

type SetterOmit = Omit<SettersExhibitions, 'nome_unico'>

export const useSubmitExhibition = () => {
  const submit = async ({
    artista,
    cpfOrCnpj,
    data_de_fim,
    data_de_inicio,
    local,
    recurso,
    titulo,
    sobre_a_obra,
    capa,
    tags,
    tipo_capa,
  }: SetterOmit): Promise<Getter<GettersExhibitions>> => {
    const document: SetterOmit = {
      artista: artista,
      categoria: Category.Exhibition,
      cpfOrCnpj: cpfOrCnpj,
      tags: tags,
      generos: [],
      sobre_a_obra: sobre_a_obra,
      data_de_fim: data_de_fim,
      data_de_inicio: data_de_inicio,
      titulo: titulo,
      local: local,
      recurso: recurso,
      capa: capa,
      tipo_capa: tipo_capa,
    }

    try {
      const { data } = await api.post<Getter<GettersExhibitions>>(
        'exhibitions',
        document
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
