import React from 'react'

import CheckingErrs from '@/components/molecule/checking-errs'

import {
  useFormExhibitionTags,
  useSubmitFormExhibition,
} from '@/forms/Product/product-exhibition/hooks'

import SendFormExhibitionButton from '../../atoms/send-form-button'
import { ContainerSendForm } from './styles'

const SendExhibition = () => {
  const { onSubmit, reset, validated } = useSubmitFormExhibition()
  const { tags, onChangeTags } = useFormExhibitionTags()
  return (
    <ContainerSendForm>
      <SendFormExhibitionButton
        onSubmit={onSubmit}
        reset={reset}
        validated={validated.isValid}
      />
      <CheckingErrs err={validated.err} />
    </ContainerSendForm>
  )
}

export default SendExhibition
