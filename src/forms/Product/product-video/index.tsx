/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from 'react'

import { Category, TypesProducts } from '@/types'
import { createContext } from 'use-context-selector'

import { Document } from '../types'
import { FormProductVideo } from './types'

import { useAttrsProduct } from '@/hooks/use-attrs-product'
import { useAttrsVideo } from '@/hooks/use-attrs-videos/use-attrs-videos'

export const FormProductVideoContext = createContext({} as FormProductVideo)

const FormProductVideoProvider: React.FC = ({ children }) => {
  // State -----------------------------------------------------------------------
  const [type, setType] = useState(TypesProducts.VIDEO)
  const [category, setCategory] = useState<Category.Show | Category.VideoClipe>(Category.Show)

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

  // cleanup ---------------------------------------------------------------------
  useEffect(() => {
    return () => {
      onChangeFinancialResources(0)
      onChangeTags([])
      onChangeThumbnail({} as Document)
      setType(TypesProducts.MP3)
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

  const onChangeCategory = useCallback(
    (value: Category.Show | Category.VideoClipe) => {
      setCategory(value)
    },
    [category]
  )

  return (
    <FormProductVideoContext.Provider
      value={{
        thumbnail,
        category,
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
        onChangeCategory,
      }}
    >
      {children}
    </FormProductVideoContext.Provider>
  )
}

export default FormProductVideoProvider
