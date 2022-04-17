import { useContextSelector } from 'use-context-selector'

import { FormProductVideoInfoContext } from './index'

export const useFormVideoInfo = () => {
  const title = useContextSelector(FormProductVideoInfoContext, (value) => value.title)
  const description = useContextSelector(FormProductVideoInfoContext, (value) => value.description)
  const onChangeTitle = useContextSelector(
    FormProductVideoInfoContext,
    (value) => value.onChangeTitle
  )
  const onChangeDescription = useContextSelector(
    FormProductVideoInfoContext,
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
  const tags = useContextSelector(FormProductVideoInfoContext, (value) => value.tags)
  const onChangeTags = useContextSelector(
    FormProductVideoInfoContext,
    (value) => value.onChangeTags
  )
  return {
    onChangeTags,
    tags,
  }
}

export const useFormVideoCategory = () => {
  const categoryVideo = useContextSelector(
    FormProductVideoInfoContext,
    (value) => value.categoryVideo
  )
  const onChangeCategoryVideo = useContextSelector(
    FormProductVideoInfoContext,
    (value) => value.onChangeCategoryVideo
  )

  return {
    categoryVideo,
    onChangeCategoryVideo,
  }
}

export const useFormVideoCPFandCNPJ = () => {
  const cpfOrCnpj = useContextSelector(FormProductVideoInfoContext, (value) => value.cpfOrCnpj)
  const onChangeCPForCNPJ = useContextSelector(
    FormProductVideoInfoContext,
    (value) => value.onChangeCPForCNPJ
  )
  const cpfOrCnpjIsValid = useContextSelector(
    FormProductVideoInfoContext,
    (value) => value.cpfOrCnpjIsValid
  )
  const onChangeCPForCNPJIsValid = useContextSelector(
    FormProductVideoInfoContext,
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
    FormProductVideoInfoContext,
    (value) => value.financialResources
  )
  const onChangeFinancialResources = useContextSelector(
    FormProductVideoInfoContext,
    (value) => value.onChangeFinancialResources
  )
  return {
    financialResources,
    onChangeFinancialResources,
  }
}

export const useFormVideoCulturalName = () => {
  const culturalName = useContextSelector(
    FormProductVideoInfoContext,
    (value) => value.culturalName
  )
  const onChangeCulturalName = useContextSelector(
    FormProductVideoInfoContext,
    (value) => value.onChangeCulturalName
  )

  return {
    culturalName,
    onChangeCulturalName,
  }
}

export const useFormVideoThumbnail = () => {
  const thumbnail = useContextSelector(FormProductVideoInfoContext, (value) => value.thumbnail)
  const onChangeThumbnail = useContextSelector(
    FormProductVideoInfoContext,
    (value) => value.onChangeThumbnail
  )

  return {
    thumbnail,
    onChangeThumbnail,
  }
}

export const useSubmitFormVideoInfo = () => {
  const onSubmit = useContextSelector(FormProductVideoInfoContext, (value) => value.onSubmit)

  const reset = useContextSelector(FormProductVideoInfoContext, (value) => value.reset)

  const validated = useContextSelector(FormProductVideoInfoContext, (value) => value.validated)

  return {
    onSubmit,
    reset,
    validated,
  }
}
