import React from 'react'

import { useFormikContext } from 'formik'

import InputTopic from '@/components/molecule/input-topic'

import { IFormValues } from '../../../type'
import { Container } from './styles'

const BookContent = () => {
  const { values, setFieldValue } = useFormikContext<IFormValues>()

  const onChange = (key: keyof IFormValues) => (value: any) => setFieldValue(key, value)

  return (
    <Container>
      <InputTopic
        value={values.publisher}
        onChangeText={onChange('publisher')}
        topic="Editora"
        textAlign="center"
        maxLength={50}
      />

      <InputTopic
        mask="9999"
        value={values.numberOfPages}
        textAlign="center"
        onChangeText={onChange('numberOfPages')}
        topic="Num de páginas"
        placeholder="Páginas"
      />

      <InputTopic
        mask="99,9 99,9 99,9 cm"
        value={values.dimensions}
        onChangeText={onChange('dimensions')}
        textAlign="center"
        topic="Dimensões"
        keyboardType="numeric"
        placeholder="Tamanho"
      />

      <InputTopic
        value={values.illustrator}
        textAlign="center"
        onChangeText={onChange('illustrator')}
        topic="Ilustrador"
        placeholder="Ilustrador"
        maxLength={50}
      />
    </Container>
  )
}

export default BookContent
