import React from 'react'

import { useFormikContext } from 'formik'

import InputTopic from '@/components/molecule/input-topic'
import InputTopicMasked from '@/components/molecule/input-topic-masked'

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
        styleViewInput={{
          flex: 1,
          fontSize: 14,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}
        maxLength={50}
      />

      <InputTopicMasked
        value={values.numberOfPages}
        textAlign="center"
        onChangeText={onChange('numberOfPages')}
        topic="Num de páginas"
        mask="digits"
        digits={4}
        keyboardType="numeric"
        placeholder="Páginas"
        styleViewInput={{
          flex: 1,
          fontSize: 14,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}
        maxLength={4}
      />

      <InputTopicMasked
        value={values.dimensions}
        onChangeText={onChange('dimensions')}
        textAlign="center"
        topic="Dimensões"
        type="custom"
        options={{
          decimalSeparator: ',',
          fractionGroupSize: 3,
          fractionGroupSeparator: ' ',
          precision: 2,
        }}
        mask="99,9 x 99,9 x 99,9 cm"
        keyboardType="numeric"
        placeholder="Tamanho"
        styleViewInput={{
          flex: 1,
          fontSize: 14,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}
      />

      <InputTopic
        value={values.illustrator}
        textAlign="center"
        onChangeText={onChange('illustrator')}
        topic="Ilustrador"
        placeholder="Ilustrador"
        styleViewInput={{
          flex: 1,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}
        maxLength={50}
      />
    </Container>
  )
}

export default BookContent
