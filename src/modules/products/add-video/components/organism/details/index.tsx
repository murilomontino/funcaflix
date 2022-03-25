import React from 'react'

import GetImageButton from '@/components/atom/get-image-button'
import FieldCPFandCNPJGeneric from '@/components/molecule/field-cpf-and-cnpj'
import InputTags from '@/components/molecule/input-tags'
import InputTextArea from '@/components/molecule/input-text-area'
import InputTopic from '@/components/molecule/input-topic'
import SendFormButton from '@/components/molecule/send-form-button'

import {
  useFormVideoCulturalName,
  useFormVideoCPFandCNPJ,
  useFormVideoThumbnail,
  useFormVideoInfo,
  useFormVideoTags,
} from '@/forms/Product/product-video/hooks'

import { Important } from '../../../styles'
import { Container } from './styles'

const Details = () => {
  const { description, onChangeDescription, onChangeTitle, title } = useFormVideoInfo()

  const { culturalName, onChangeCulturalName } = useFormVideoCulturalName()
  const { onChangeThumbnail, thumbnail } = useFormVideoThumbnail()
  const { tags, onChangeTags } = useFormVideoTags()
  const { cpfOrCnpj, cpfOrCnpjIsValid, onChangeCPForCNPJ, onChangeCPForCNPJIsValid } =
    useFormVideoCPFandCNPJ()

  return (
    <Container>
      <GetImageButton
        placeholder="Escolher a Thumbnail"
        image={thumbnail}
        onChangeImage={onChangeThumbnail}
        height={180}
        width={320}
      />
      <Important>* Campos Obrigatórios</Important>
      <FieldCPFandCNPJGeneric
        isValid={cpfOrCnpjIsValid}
        onChangeIsValid={onChangeCPForCNPJIsValid}
        onChangeValue={onChangeCPForCNPJ}
        value={cpfOrCnpj}
        topic="CPF/CNPJ"
        viewContainer={{
          width: '70%',
        }}
      />
      <InputTopic
        topic="Nome Cultural"
        requered
        onChangeText={onChangeCulturalName}
        value={culturalName}
        styleViewContainer={{
          width: '70%',
        }}
      />

      <InputTopic
        topic="Título da Obra"
        onChangeText={onChangeTitle}
        requered
        value={title}
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
        onChangeValue={onChangeDescription}
        value={description}
        styleViewContainer={{
          width: '70%',
        }}
      />

      <InputTags tags={tags} onChangeTags={onChangeTags} />

      <SendFormButton
        title="Enviar"
        validated
        onSubmit={() => {
          return
        }}
        reset={() => {
          return
        }}
      />
    </Container>
  )
}

export default Details
