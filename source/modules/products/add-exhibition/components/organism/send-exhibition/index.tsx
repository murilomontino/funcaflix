import React from 'react'

import CheckingErrs from '@/components/molecule/checking-errs'
import InputTags from '@/components/molecule/input-tags'
import SendFormExhibitionButton from '@/components/molecule/send-form-button'

import {
  useFormExhibitionTags,
  useSubmitFormExhibition,
} from '@/forms/Product/product-exhibition/hooks'

import { ContainerSendForm } from './styles'

const SendExhibition = () => {
  const { onSubmit, reset, validated } = useSubmitFormExhibition()
  const { tags, onChangeTags } = useFormExhibitionTags()
  return (
    <ContainerSendForm>
      <InputTags tags={tags} onChangeTags={onChangeTags} />

      <SendFormExhibitionButton
        onSubmit={onSubmit}
        reset={reset}
        validated={validated.isValid}
        title="Enviar Exposição"
      />
      <CheckingErrs err={validated.err} />
    </ContainerSendForm>
  )
}

export default SendExhibition
