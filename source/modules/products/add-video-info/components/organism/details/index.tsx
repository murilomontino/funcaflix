import React from 'react'
import { View } from 'react-native'

import { FormikErrors } from 'formik'
import { GettersVideosInfo } from 'types-funcap'

import GetImageButton from '@/components/atom/get-image-button'
import SelectDropdown from '@/components/atom/select-dropdown'
import CheckingErrs from '@/components/molecule/checking-errs'
import FieldCPFandCNPJGeneric from '@/components/molecule/field-cpf-and-cnpj'
import InputTags from '@/components/molecule/input-tags'
import InputTextArea from '@/components/molecule/input-text-area'
import InputTopic from '@/components/molecule/input-topic'
import SendFormButton from '@/components/molecule/send-form-button'

import { mapCategoryVideo } from '@/forms/Product/product-video-info/types'
import { mapFinancialResources } from '@/forms/Product/types'
import { Document } from '@/forms/Product/types'

import { Getter } from '@/services/config/types'

import { Important } from '../../../styles'
import { Container } from './styles'

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

type Props = {
  values: Values
  errors: FormikErrors<Values>
  handleSubmit: () => Promise<Getter<GettersVideosInfo>>
  isValid: boolean
  reset: () => void
  setFieldValue: (field: string, value: string) => void
}

const Details = ({ values, errors, handleSubmit, isValid, setFieldValue, reset }: Props) => {
  const onChange = (key: string) => (value: any) => setFieldValue(key, value)

  return (
    <Container>
      <GetImageButton
        placeholder="Escolher a Thumbnail"
        image={values.thumbnail}
        onChangeImage={onChange('thumbnail')}
        height={180}
        width={320}
      />

      <View
        style={{
          zIndex: 50,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
        }}
      >
        <SelectDropdown
          options={mapFinancialResources}
          labelDefault="Recursos"
          onChangeSelect={onChange('financialResources')}
        />
        <SelectDropdown
          options={mapCategoryVideo}
          labelDefault="Categoria de Video"
          onChangeSelect={onChange('categoryVideo')}
        />
      </View>

      <Important>* Campos Obrigatórios</Important>
      <FieldCPFandCNPJGeneric
        isValid={values.cpfOrCnpjIsValid}
        onChangeIsValid={onChange('cpfOrCnpjIsValid')}
        onChangeValue={onChange('cpfOrCnpj')}
        value={values.cpfOrCnpj}
        topic="CPF/CNPJ"
        viewContainer={{
          width: '70%',
        }}
      />

      <InputTopic
        topic="Nome Cultural"
        requered
        onChangeText={onChange('culturalName')}
        value={values.culturalName}
        styleViewContainer={{
          width: '70%',
        }}
      />

      <InputTopic
        topic="Título da Obra"
        onChangeText={onChange('title')}
        requered
        value={values.title}
        styleViewContainer={{
          width: '70%',
        }}
      />

      <InputTextArea
        height={360}
        maxLength={2400}
        numberLines={10}
        topic="Descrição"
        requered
        onChangeValue={onChange('description')}
        value={values.description}
        styleViewContainer={{
          width: '70%',
        }}
      />

      <InputTags tags={values.tags} onChangeTags={onChange('tags')} />

      <SendFormButton title="Enviar" validated={isValid} onSubmit={handleSubmit} reset={reset} />
      <CheckingErrs err={Object.values(errors) as string[]} />
    </Container>
  )
}

export default Details
