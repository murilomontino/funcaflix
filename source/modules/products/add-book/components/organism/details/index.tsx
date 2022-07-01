import React from 'react'
import { Text } from 'react-native'

import { useFormikContext } from 'formik'

import ImportantMessage from '@/components/atom/important-message'
import FieldCPFandCNPJGeneric from '@/components/molecule/field-cpf-and-cnpj'
import InputISBN from '@/components/molecule/input-isbn'
import InputTextArea from '@/components/molecule/input-text-area'
import InputTopic from '@/components/molecule/input-topic'

import { IFormValues } from '../../../type'
import { Container } from './styles'

const Details = () => {
  const { values, setFieldValue } = useFormikContext<IFormValues>()

  const onChange = (key: keyof IFormValues) => (value: string) => setFieldValue(key, value)

  return (
    <Container>
      <ImportantMessage />

      <FieldCPFandCNPJGeneric
        onChangeValue={onChange('cpfOrCnpj')}
        value={values.cpfOrCnpj}
        topic="CPF/CNPJ"
      />

      <InputTopic
        topic="Nome Cultural"
        requered={true}
        onChangeText={onChange('culturalName')}
        value={values.culturalName}
      />
      <InputTopic
        topic="Data de Publicação"
        onChangeText={onChange('publishedDate')}
        value={values.publishedDate}
        maxLength={10}
        mask={values.publishedDate.length > 3 ? '99-99-9999' : '9999'}
      />

      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 20,
          fontVariant: ['small-caps'],
          textAlign: 'center',
          color: '#fff',
        }}
      >
        Detalhes
      </Text>
      <InputISBN requered onChangeText={onChange('isbn')} value={values.isbn} />

      <InputTopic value={values.title} onChangeText={onChange('title')} topic="Título" requered />
      <InputTopic value={values.subTitle} onChangeText={onChange('subTitle')} topic="Sub-Título" />
      <InputTextArea
        value={values.synopsis}
        requered
        onChangeValue={onChange('synopsis')}
        topic="Sinopse"
        height={300}
        maxLength={1500}
        numberLines={12}
      />
      <InputTextArea
        value={values.biography}
        onChangeValue={onChange('biography')}
        topic="Biografia"
        height={450}
        maxLength={5000}
        numberLines={12}
      />
    </Container>
  )
}

export default Details
