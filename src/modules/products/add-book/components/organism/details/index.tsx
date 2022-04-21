import React from 'react'

import ImportantMessage from '@/components/atom/important-message'
import FieldCPFandCNPJGeneric from '@/components/molecule/field-cpf-and-cnpj'
import { InputTopic } from '@/components/molecule/input-topic'
import InputTopicMasked from '@/components/molecule/input-topic-masked'

import { useFormBookData, useFormBookCPFandCNPJ } from '@/forms/Product/product-book/hooks'

import InputsFormsLiterature from '../../molecules/inputs-forms-literature'
import { Container } from './styles'

const Details = () => {
  const { culturalName, onChangeCulturalName, onChangePublishedDate, publishedDate } =
    useFormBookData()

  const { cpfOrCnpj, cpfOrCnpjIsValid, onChangeCPForCNPJ, onChangeCPForCNPJIsValid } =
    useFormBookCPFandCNPJ()

  return (
    <Container>
      <ImportantMessage />

      <FieldCPFandCNPJGeneric
        isValid={cpfOrCnpjIsValid}
        onChangeIsValid={onChangeCPForCNPJIsValid}
        onChangeValue={onChangeCPForCNPJ}
        value={cpfOrCnpj}
        topic="CPF/CNPJ"
      />
      <InputTopic
        topic="Nome Cultural"
        requered={true}
        onChangeText={onChangeCulturalName}
        value={culturalName}
        styleViewContainer={{
          width: '90%',
        }}
      />
      <InputTopicMasked
        topic="Data de Publicação"
        onChangeText={onChangePublishedDate}
        value={publishedDate}
        styleViewContainer={{
          width: '90%',
        }}
        maxLength={10}
        mask={'date'}
      />

      <InputsFormsLiterature />
    </Container>
  )
}

export default Details
