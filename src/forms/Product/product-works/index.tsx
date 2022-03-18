/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'

import { GettersExhibitionsWorks, SettersExhibitionsWorks } from '@/types'
import { createContext } from 'use-context-selector'

import { FormProductWorks } from './type'

import useFileImages from '@/hooks/use-attrs-works/use-file-images'
import useOnSubmitWork from '@/hooks/use-attrs-works/use-on-submit-work'
import useFileReader from '@/hooks/utils/use-file-reader'

export const FormProductWorkContext = createContext({} as FormProductWorks)

type Props = {
  items: GettersExhibitionsWorks[]
  nome_exibicao: string
  exibicao_id: number
  produtoId: number
  children: React.ReactNode
}

const FormProductWorksProvider = ({
  children,
  items,
  exibicao_id,
  nome_exibicao,
  produtoId,
}: Props) => {
  // Obras da Exibição (works) já cadastradas no banco de dados
  const [getterWorks, setGetterWorks] = useState<GettersExhibitionsWorks[]>(() => {
    if (items) {
      return [...items]
    }
    return []
  })

  const [loading, setLoading] = useState(false)

  const showLoading = () => {
    setLoading(true)
  }

  const hideLoading = () => {
    setLoading(false)
  }

  const {
    works,
    setWorks,
    onChangeAttrArtistWork,
    onChangeAttrDimensionWork,
    onChangeWorks,
    onChangeAttrEditionWork,
    onChangeAttrMoldWork,
    onChangeAttrOriginalWork,
    onChangeAttrPrintWork,
    onChangeAttrTechniqueWork,
    onChangeAttrTitleWork,
    onChangeAttrYearWork,
  } = useFileImages()

  const { submit: onSubmitWork } = useOnSubmitWork()
  const fileReader = useFileReader()

  /*
   *  @param {string} id - id da obra que será enviada para o servidor
   *  @param {string} nome_exibicao - nome da exibição ao qual representa o identificador unico da obra
   *  @param {number} exibicao_id - id da exibição ao qual representa o id da obra
   */
  const submit = async (id: string) => {
    // @const {number} index - index da obra que será enviada para o servidor

    try {
      showLoading()
      const index = works.findIndex((item) => item.get('id') === id)

      if (index === -1) return // Caso não encontre o index da obra, retorna

      // @const {File} file - arquivo da obra que será enviado para o servidor
      // Executa o método fileReader para ler o arquivo da obra e retorna o arquivo
      const file = await fileReader(works[index].get('arquivo') as File)

      // Verifica se o arquivo obteve sucesso na leitura e se o arquivo não é um Array
      if (!Array.isArray(file) && file.type === 'success') {
        // Constante representando todas as informações da obra que serão enviadas para o servidor
        const work: Omit<SettersExhibitionsWorks, 'name_uuid'> = {
          exibicaoId: exibicao_id,
          nome_exibicao: nome_exibicao,
          produtoId: produtoId,
          titulo: works[index].get('titulo') as string,
          artista: works[index].get('artista') as string,
          tecnica: works[index].get('tecnica') as string,
          edicao: works[index].get('edicao') as string,
          impressao: works[index].get('impressao') as string,
          moldura: works[index].get('moldura') as string,
          ano: works[index].get('ano') as string,
          dimensao: works[index].get('dimensao') as string,
          obra_original: works[index].get('obra_original') as any,
          arquivo: file.uri,
          nome_arquivo: file.name,
          tipo_de_imagem: file.mimeType,
        }
        // Envia a obra para o servidor
        const response = await onSubmitWork(work)

        // Verifica se a obra foi enviada com sucesso
        if (response.statusCode === 200) {
          // Adiciona a obra na lista de obras da exibição
          setGetterWorks((state) => {
            return [...state, response.data]
          })
          // Remove a obra da lista de obras novas
          setWorks((state) => {
            // remove elemento do index do array
            return state.filter((item, index) => item.get('id') !== id)
          })
        }
      }
    } catch (error) {
      console.log(error)
    } finally {
      hideLoading()
    }
  }

  return (
    <FormProductWorkContext.Provider
      value={{
        works,
        getterWorks,
        hideLoading,
        showLoading,
        loading,
        onChangeAttrEditionWork,
        onChangeAttrMoldWork,
        onChangeAttrOriginalWork,
        onChangeAttrPrintWork,
        onChangeAttrTechniqueWork,
        onChangeAttrTitleWork,
        onChangeAttrYearWork,
        onChangeAttrArtistWork,
        onChangeAttrDimensionWork,
        onChangeWorks,
        submit,
      }}
    >
      {children}
    </FormProductWorkContext.Provider>
  )
}

export default FormProductWorksProvider
