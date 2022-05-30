import React, { useCallback, useMemo } from 'react'

import { useFormik } from 'formik'
import { Category, SettersVideosInfo } from 'types-funcap'
import * as yup from 'yup'

import { Document } from '@/forms/Product/types'

import Details from './components/organism/details'

import { useSubmitVideoInfo } from '@/hooks/use-attrs-videos/use-submit-video-info'

type Values = {
  title: string
  cpfOrCnpjIsValid: boolean
  culturalName: string
  description: string
  tags: string[]
  thumbnail: Document
  cpfOrCnpj: string
  categoryVideo: number
  financialResources: number
}

const Main = () => {
  const { submit } = useSubmitVideoInfo()

  const initialValues: Values = useMemo(
    () => ({
      cpfOrCnpjIsValid: false,
      title: '',
      culturalName: '',
      description: '',
      tags: [],
      thumbnail: null,
      cpfOrCnpj: '',
      categoryVideo: 0,
      financialResources: 0,
    }),
    []
  )

  const validationSchema = yup.object().shape({
    cpfOrCnpjIsValid: yup.boolean().required(),
    cpfOrCnpj: yup.string().required('CPF/CNPJ é Campo obrigatório'),
    culturalName: yup.string().required('Nome Cultural é Campo obrigatório'),
    title: yup.string().required('Título é Campo obrigatório'),
    description: yup.string().required('Descrição é Campo obrigatório'),
    tags: yup.array().nullable().of(yup.string()),
    financialResources: yup.number().required('Recursos Financeiros é campo obrigatório'),
    categoryVideo: yup.number().required('Categoria de Video é campo obrigatório'),
    thumbnail: yup.mixed(),
  })

  const { setFieldValue, values, errors, isValid, resetForm, setSubmitting } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      return
    },
  })

  const onSubmit = useCallback(async () => {
    setSubmitting(true)
    const video: SettersVideosInfo = {
      titulo: values.title,
      tags: values.tags,
      thumbnail: values.thumbnail?.uri,
      cpfOrCnpj: values.cpfOrCnpj,
      mimetype_thumbnail: values.thumbnail?.mimeType as any,
      biografia: null,
      categoria: Category.Video,
      categoria_de_video: values.categoryVideo,
      nome_cultural: values.culturalName,
      recurso: values.financialResources,
    }

    const response = await submit(video)
    setSubmitting(false)
    resetForm()
    return response
  }, [
    values.categoryVideo,
    values.culturalName,
    values.cpfOrCnpj,
    values.cpfOrCnpjIsValid,
    values.description,
    values.financialResources,
    values.tags,
    values.title,
    values.thumbnail,
    submit,
    setSubmitting,
    resetForm,
  ])

  const reset = useCallback(() => {
    resetForm()
  }, [resetForm])

  return (
    <Details
      values={values}
      handleSubmit={onSubmit}
      reset={reset}
      errors={errors}
      isValid={isValid}
      setFieldValue={setFieldValue}
    />
  )
}

export default Main
