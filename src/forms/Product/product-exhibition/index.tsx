import React, { useCallback, useMemo } from 'react'

import {
  Category,
  ExhibitionPhotosTypes,
  GettersExhibitions,
  TypeImgCapa,
} from '@/types'
import { createContext } from 'use-context-selector'

import { Getter } from '@/services/config/types'

import { FormProductExhibition, keys } from './type'

import { useAttrsExhibition } from '@/hooks/use-attrs-exhibition'
import { useAttrsExhibitionFiles } from '@/hooks/use-attrs-exhibition-files'
import { useAttrsProduct } from '@/hooks/use-attrs-product'
import { useSubmitExhibition } from '@/hooks/use-submit-exhibition'
import { useSubmitPhoto } from '@/hooks/use-submit-photos'

export const FormProductExhibitionContext = createContext(
  {} as FormProductExhibition
)

const FormProductExhibitionProvider: React.FC = ({ children }) => {
  // Fields Exhibitions
  const {
    biography,
    descriptionExhibition,
    endDate,
    location,
    photoOfArtist,
    startDate,
    titleExhibition,
    onChangeBiography,
    onChangeDescriptionExhibition,
    onChangeEndDate,
    onChangeLocation,
    onChangePhotoOfArtist,
    onChangeStartDate,
    onChangeTitleExhibition,
  } = useAttrsExhibition()

  // Fields Products
  const {
    tags,
    thumbnail,
    cpfOrCnpj,
    cpfOrCnpjIsValid,
    culturalName,
    financialResources,
    onChangeTags,
    onChangeThumbnail,
    onChangeCPForCNPJ,
    onChangeCPForCNPJIsValid,
    onChangeCulturalName,
    onChangeFinancialResources,
  } = useAttrsProduct()

  const {
    mapFiles,
    onChangeAttrDatePhoto,
    onChangeAttrDescriptionPhoto,
    onChangeAttrTypePhoto,
    onChangeAttrTitlePhoto,
    onChangeAttrErrorPhoto,
    onChangeFile,
    onRemovePhoto,
    onChangeMapFiles,
    countValidatedFiles,
    validateFiles,
    photoValidator,
  } = useAttrsExhibitionFiles()

  const { submit } = useSubmitExhibition()
  const { submit: submitPhoto } = useSubmitPhoto()

  const reset = useCallback(() => {
    onChangeDescriptionExhibition('')
    onChangeBiography('')
    onChangeEndDate('')
    onChangeLocation('')
    onChangePhotoOfArtist(null)
    onChangeStartDate('')
    onChangeTitleExhibition('')
    onChangeTags([])
    onChangeThumbnail(null)
    onChangeMapFiles([])
    onChangeCPForCNPJ('')
    onChangeCPForCNPJIsValid(false)
    onChangeCulturalName('')
    onChangeFinancialResources(0)
  }, [])

  const onSubmitPhotoArtist = async ({
    exibicaoId,
    nome_exibicao,
    produtoId,
  }: {
    nome_exibicao: string
    exibicaoId: number
    produtoId: number
  }) => {
    return submitPhoto({
      artista: culturalName,
      arquivo: photoOfArtist.current?.uri,
      descricao: biography.current,
      nome_arquivo: photoOfArtist.current?.name,
      tipo_de_imagem: photoOfArtist.current?.mimeType,
      tipo_de_foto: ExhibitionPhotosTypes.foto_de_artista,
      titulo: culturalName,
      data: new Date().toISOString(),
      nome_exibicao: nome_exibicao,
      exibicaoId: exibicaoId,
      produtoId: produtoId,
    })
  }

  const onSubmitExhibition = async (): Promise<Getter<GettersExhibitions>> => {
    const response = await submit({
      artista: culturalName,
      categoria: Category.Exhibition,
      cpfOrCnpj: cpfOrCnpj,
      tags: tags,
      generos: [],
      sobre_a_obra: descriptionExhibition,
      data_de_fim: endDate.current,
      data_de_inicio: startDate,
      titulo: titleExhibition,
      local: location.current,
      recurso: financialResources,
      capa: thumbnail.uri ?? undefined,
      tipo_capa: (thumbnail.mimeType as TypeImgCapa) ?? undefined,
    })

    if (response.statusCode === 200) {
      const { data } = response

      await onSubmitPhotoArtist({
        exibicaoId: data.id,
        nome_exibicao: data.nome_unico,
        produtoId: data.produtoId,
      })

      await onSubmitPhotosEvent({
        exibicaoId: data.id,
        nome_exibicao: data.nome_unico,
        produtoId: data.produtoId,
      })

      return { statusCode: 200, data }
    } else {
      return { statusCode: response.statusCode, error: response.error }
    }
  }

  const onSubmitPhotosEvent = async ({
    exibicaoId,
    nome_exibicao,
    produtoId,
  }: {
    nome_exibicao: string
    exibicaoId: number
    produtoId: number
  }) => {
    onChangeMapFiles((state: Map<keys, unknown>[]) => {
      const fn = async (photo: Map<keys, unknown>) => {
        const { statusCode } = await submitPhoto({
          artista: culturalName,
          arquivo: photo.get('uri') as string,
          descricao: photo.get('descricao') as string,
          nome_arquivo: photo.get('name') as string,
          tipo_de_imagem: photo.get('mimeType') as string,
          tipo_de_foto: photo.get('tipo_de_foto') as ExhibitionPhotosTypes,
          titulo: photo.get('titulo') as string,
          data: photo.get('data') as string,
          nome_exibicao: nome_exibicao,
          exibicaoId: exibicaoId,
          produtoId: produtoId,
        })

        if (statusCode !== 200) {
          photo.set('error', true)
          return true
        }

        return false
      }

      return state.filter((photo) => {
        return fn(photo).then((bool: boolean) => {
          return bool
        })
      })
    })

    return { statusCode: 400 }
  }

  const onSubmit = onSubmitExhibition

  // Objeto tendo todos os validated que deram false, e o segundo é o boolean que representa se todos os fields foram validados
  const validated = useMemo(() => {
    const validateCpfOrCnpj = cpfOrCnpj.length > 0 && cpfOrCnpjIsValid

    const validateCulturalName = !!culturalName?.trim()

    const validateDescriptionExhibition = !!descriptionExhibition?.trim()

    const validateTitleExhibition = !!titleExhibition?.trim()

    const financialResourcesIsValid = !!financialResources

    const validateStartDate = !!startDate?.trim()

    const validatePhotos = !(mapFiles.length > 0) || validateFiles

    const filterValid = [
      !validatePhotos && 'Existem Fotos Inválidas',
      !validateCpfOrCnpj && 'CPF/CNPJ Inválido',
      !validateCulturalName && 'Nome artístico Não Preenchido',
      !validateDescriptionExhibition && 'Descrição Não Preenchida',
      !validateTitleExhibition && 'Título Não Preenchido',
      !validateStartDate && 'Data de início Não Pode ser vazia',
      !financialResourcesIsValid && 'Recursos financeiros Não Escolhido',
    ].filter((item) => item)

    const isValid = filterValid.length === 0

    return { err: filterValid, isValid }
  }, [
    validateFiles,
    mapFiles,
    cpfOrCnpj,
    cpfOrCnpjIsValid,
    culturalName,
    financialResources,
    descriptionExhibition,
    titleExhibition,
    startDate,
  ])

  return (
    <FormProductExhibitionContext.Provider
      value={{
        tags,
        thumbnail,
        cpfOrCnpj,
        cpfOrCnpjIsValid,
        culturalName,
        financialResources,
        mapFiles,
        location,
        countValidatedFiles,
        validateFiles,
        photoValidator,
        biography,
        photoOfArtist,
        titleExhibition,
        onChangeMapFiles,
        onChangeCPForCNPJ,
        onChangeAttrTitlePhoto,
        onChangeCPForCNPJIsValid,
        onChangeCulturalName,
        onChangeFinancialResources,
        onChangeDescriptionExhibition,
        onChangeStartDate,
        onChangeTitleExhibition,
        onChangeAttrDatePhoto,
        onChangeAttrDescriptionPhoto,
        onChangeAttrTypePhoto,
        descriptionExhibition,
        endDate,
        startDate,
        onChangeThumbnail,
        onRemovePhoto,
        onChangeAttrErrorPhoto,
        onChangeFile,
        reset,
        onSubmit,
        validated,
        onChangeTags,
        onChangeBiography,
        onChangeEndDate,
        onChangeLocation,
        onChangePhotoOfArtist,
      }}
    >
      {children}
    </FormProductExhibitionContext.Provider>
  )
}

export default FormProductExhibitionProvider
