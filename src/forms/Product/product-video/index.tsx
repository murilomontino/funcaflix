/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { Category, SettersVideosInfo, TypesProducts } from '@/types'
import { CategoriesVideos } from '@/types/models/videos'
import { createContext } from 'use-context-selector'

import { Document } from '../types'
import { FormProductVideo } from './types'

import { useAttrsProduct } from '@/hooks/use-attrs-product'
import { useAttrsVideo } from '@/hooks/use-attrs-videos/use-attrs-videos'
import { useSubmitVideoInfo } from '@/hooks/use-attrs-videos/use-submit-video-info'

export const FormProductVideoContext = createContext({} as FormProductVideo)

const FormProductVideoProvider: React.FC = ({ children }) => {
  // State -----------------------------------------------------------------------
  const [type, setType] = useState<TypesProducts.LINK | TypesProducts.MP4>(null)
  const [categoryVideo, setCategoryVideo] = useState<CategoriesVideos>(null)

  const {
    cpfOrCnpj,
    cpfOrCnpjIsValid,
    culturalName,
    financialResources,
    onChangeCPForCNPJ,
    onChangeCPForCNPJIsValid,
    onChangeCulturalName,
    onChangeFinancialResources,
    onChangeTags,
    onChangeThumbnail,
    tags,
    thumbnail,
  } = useAttrsProduct()

  const { description, onChangeDescription, onChangeTitle, title } = useAttrsVideo()
  const { submit } = useSubmitVideoInfo()
  // cleanup ---------------------------------------------------------------------
  useEffect(() => {
    return () => {
      onChangeFinancialResources(0)
      onChangeTags([])
      onChangeThumbnail({} as Document)
      setType(null)
      onChangeCPForCNPJ('')
      onChangeCPForCNPJIsValid(false)
      onChangeCulturalName('')
    }
  }, [])

  const onChangeType = useCallback(
    (value: number) => {
      setType(value)
    },
    [type]
  )

  const onChangeCategoryVideo = useCallback(
    (value: CategoriesVideos) => {
      setCategoryVideo(value)
    },
    [categoryVideo]
  )

  const reset = useCallback(() => {
    onChangeTags([])
    onChangeThumbnail({} as Document)
    setType(null)
    onChangeCPForCNPJ('')
    onChangeCPForCNPJIsValid(false)
    onChangeCulturalName('')
    onChangeFinancialResources(0)
    onChangeDescription('')
    onChangeTitle('')
  }, [])

  const validated = useMemo(() => {
    const validateCpfOrCnpj = cpfOrCnpj.length > 0 && cpfOrCnpjIsValid

    const validateCulturalName = !!culturalName?.trim()

    const validateDescriptionExhibition = !!description?.trim()

    const validateTitleExhibition = !!title?.trim()

    const financialResourcesIsValid = !!financialResources && financialResources > 0

    const validateCategoryVideo = !!categoryVideo && categoryVideo > 0

    const validateType = !!type && type > 0

    const filterValid = [
      !validateCpfOrCnpj && 'CPF/CNPJ Inválido',
      !validateCulturalName && 'Nome artístico Não Preenchido',
      !validateDescriptionExhibition && 'Descrição Não Preenchida',
      !validateTitleExhibition && 'Título Não Preenchido',
      !financialResourcesIsValid && 'Recursos financeiros Não Escolhido',
      !validateCategoryVideo && 'Categoria de Video Não Escolhida',
      !validateType && 'Tipo de Produto Não Escolhido',
    ].filter((item) => item)

    const isValid = filterValid.length === 0

    return { err: filterValid, isValid }
  }, [
    cpfOrCnpj,
    cpfOrCnpjIsValid,
    culturalName,
    financialResources,
    description,
    title,
    categoryVideo,
    type,
  ])

  const onSubmit = useCallback(async () => {
    const document: SettersVideosInfo = {
      titulo: title,
      tags: tags,
      thumbnail: thumbnail.file,
      tipo: type,
      cpfOrCnpj,
      mimetype_thumbnail: thumbnail.mimeType as any,
      biografia: null,
      categoria: Category.Video,
      categoria_de_video: categoryVideo,
      nome_cultural: culturalName,
      recurso: financialResources,
    }

    const response = await submit(document)

    return response
  }, [])

  return (
    <FormProductVideoContext.Provider
      value={{
        thumbnail,
        cpfOrCnpj,
        cpfOrCnpjIsValid,
        culturalName,
        financialResources,
        onChangeCPForCNPJ,
        onChangeCPForCNPJIsValid,
        onChangeCulturalName,
        onChangeFinancialResources,
        onChangeTags,
        onChangeType,
        onChangeThumbnail,
        tags,
        type,
        description,
        onChangeDescription,
        onChangeTitle,
        title,
        onSubmit,
        reset,
        validated,
        categoryVideo,
        onChangeCategoryVideo,
      }}
    >
      {children}
    </FormProductVideoContext.Provider>
  )
}

export default FormProductVideoProvider
