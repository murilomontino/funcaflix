import React, { memo } from 'react'

import { IFormProductValues } from '@/modules/add-product/type'
import { useFormikContext } from 'formik'

import GetImageButton from '@/components/atom/get-image-button'
import FieldCPFandCNPJGeneric from '@/components/molecule/field-cpf-and-cnpj'
import InputTextArea from '@/components/molecule/input-text-area'
import InputTopic from '@/components/molecule/input-topic'
import SelectOptionsDropdown from '@/components/molecule/select-options-dropdown'

import { Important } from '../../../styles'
import { Container, Title } from './styles'

const Artist = () => {
  const { values, setFieldValue, errors } = useFormikContext<IFormProductValues>()

  const onChange = (key: keyof IFormProductValues) => (value: any) => setFieldValue(key, value)

  return (
    <Container>
      <Title>Dados do Artista:</Title>
      <Important>* Campos Obrigatórios</Important>
      <GetImageButton
        onChangeValue={onChange('imgProfile')}
        value={values.imgProfile}
        height={200}
        width={200}
        placeholder={'Fotografia do Artista'}
      />
      <SelectOptionsDropdown
        values={values.function}
        message={errors.function}
        type={20}
        visible
        onChange={onChange('function')}
        label={'Função'}
      />

      <InputTopic
        topic="Nome Cultural"
        requered={true}
        onChangeText={onChange('culturalName')}
        value={values.culturalName}
        styleViewContainer={{
          width: '70%',
        }}
      />
      <FieldCPFandCNPJGeneric
        viewContainer={{
          width: '70%',
        }}
        onChangeValue={onChange('cpf_cnpj')}
        value={values.cpf_cnpj}
        topic="CPF/CNPJ"
      />
      <InputTextArea
        height={360}
        maxLength={2400}
        numberLines={10}
        topic="Biografia"
        requered
        onChangeValue={onChange('biography')}
        value={values.biography}
        styleViewContainer={{
          width: '70%',
        }}
      />
    </Container>
  )
}

export default memo(Artist)
