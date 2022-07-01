import React from 'react'

import { FormikErrors } from 'formik'
import { TypesProducts } from 'types-funcap'

import Button from '@/components/atom/button'

import CardInsertURL from '../../atoms/card-insert-url'
import CardInsertVideo from '../../atoms/card-insert-video'
import MessageMotiView from '../../atoms/message-moti-view'
import { ContainerCentered } from './styles'

type Props = {
  type?: TypesProducts
  values: {
    url: string
    video: File
  }
  errors: FormikErrors<{
    url: string
    video: any
    type: number
  }>
  isValid: boolean
  handleSubmit: () => void
  setFieldValue: (field: string, value: any) => void
}

const ContainerVideos = ({
  type = 0,
  values,
  errors,
  handleSubmit,
  isValid,
  setFieldValue,
}: Props) => {
  if (!type || !(type > 0)) {
    return (
      <ContainerCentered>
        <MessageMotiView />
      </ContainerCentered>
    )
  }

  const videoOrLink = type?.toString() === TypesProducts.MP4.toString() // false === link

  return (
    <ContainerCentered>
      {videoOrLink ? (
        <CardInsertVideo
          file={values.video}
          onChangeFile={(value) => {
            setFieldValue('video', value)
          }}
        />
      ) : (
        <CardInsertURL
          url={values.url}
          onChangeUrl={(value) => {
            setFieldValue('url', value)
          }}
          error={errors.url}
        />
      )}
      <Button onPress={() => handleSubmit()} text="Enviar" disabled={!isValid} />
    </ContainerCentered>
  )
}

export default ContainerVideos
