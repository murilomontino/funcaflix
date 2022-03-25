import { useContextSelector } from 'use-context-selector'

import { FormProductVideoContext } from './index'

export const useFormVideoInfo = () => {
  const title = useContextSelector(FormProductVideoContext, (value) => value.title)
  const description = useContextSelector(FormProductVideoContext, (value) => value.description)
  const onChangeTitle = useContextSelector(FormProductVideoContext, (value) => value.onChangeTitle)
  const onChangeDescription = useContextSelector(
    FormProductVideoContext,
    (value) => value.onChangeDescription
  )

  return {
    title,
    description,
    onChangeTitle,
    onChangeDescription,
  }
}

export const useFormVideoTags = () => {
  const tags = useContextSelector(FormProductVideoContext, (value) => value.tags)
  const onChangeTags = useContextSelector(FormProductVideoContext, (value) => value.onChangeTags)
  return {
    onChangeTags,
    tags,
  }
}

export const useFormVideoCategory = () => {
  const category = useContextSelector(FormProductVideoContext, (value) => value.category)
  const onChangeCategory = useContextSelector(
    FormProductVideoContext,
    (value) => value.onChangeCategory
  )

  const type = useContextSelector(FormProductVideoContext, (value) => value.type)
  const onChangeType = useContextSelector(FormProductVideoContext, (value) => value.onChangeType)

  return {
    category,
    onChangeCategory,
    type,
    onChangeType,
  }
}

export const useFormVideoCPFandCNPJ = () => {
  const cpfOrCnpj = useContextSelector(FormProductVideoContext, (value) => value.cpfOrCnpj)
  const onChangeCPForCNPJ = useContextSelector(
    FormProductVideoContext,
    (value) => value.onChangeCPForCNPJ
  )
  const cpfOrCnpjIsValid = useContextSelector(
    FormProductVideoContext,
    (value) => value.cpfOrCnpjIsValid
  )
  const onChangeCPForCNPJIsValid = useContextSelector(
    FormProductVideoContext,
    (value) => value.onChangeCPForCNPJIsValid
  )
  return {
    cpfOrCnpj,
    onChangeCPForCNPJ,
    cpfOrCnpjIsValid,
    onChangeCPForCNPJIsValid,
  }
}

export const useFormVideoFinancialResources = () => {
  const financialResources = useContextSelector(
    FormProductVideoContext,
    (value) => value.financialResources
  )
  const onChangeFinancialResources = useContextSelector(
    FormProductVideoContext,
    (value) => value.onChangeFinancialResources
  )
  return {
    financialResources,
    onChangeFinancialResources,
  }
}

export const useFormVideoCulturalName = () => {
  const culturalName = useContextSelector(FormProductVideoContext, (value) => value.culturalName)
  const onChangeCulturalName = useContextSelector(
    FormProductVideoContext,
    (value) => value.onChangeCulturalName
  )

  return {
    culturalName,
    onChangeCulturalName,
  }
}

export const useFormVideoThumbnail = () => {
  const thumbnail = useContextSelector(FormProductVideoContext, (value) => value.thumbnail)
  const onChangeThumbnail = useContextSelector(
    FormProductVideoContext,
    (value) => value.onChangeThumbnail
  )
  return {
    thumbnail,
    onChangeThumbnail,
  }
}
