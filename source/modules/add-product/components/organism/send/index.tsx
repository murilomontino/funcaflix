import React from 'react'

import { IFormProductValues } from '@/modules/add-product/type'
import { useFormikContext } from 'formik'

import Button from '@/components/atom/button'
import CheckingErrs from '@/components/molecule/checking-errs'
import MultiSelectTextInput from '@/components/molecule/multi-select-text-input'
import SelectGenres from '@/components/molecule/select-genres'

import { ContainerSendForm } from './styles'

const SendExhibition = () => {
  const { values, setFieldValue, errors, handleSubmit } = useFormikContext<IFormProductValues>()

  const onChange = (key: keyof IFormProductValues) => (value: any) => setFieldValue(key, value)

  const handleSubmitForm = () => {
    console.log(values)
    handleSubmit()
    console.log(errors)
  }

  return (
    <ContainerSendForm>
      <MultiSelectTextInput values={values.tags} onChangeValues={onChange('tags')} title="Tags" />
      <SelectGenres
        category={values.category}
        values={values.genres}
        onChangeValues={onChange('genres')}
      />
      <Button onPress={handleSubmitForm} text="Enviar" />
      <CheckingErrs err={Object.values(errors)} />
    </ContainerSendForm>
  )
}

export default SendExhibition
