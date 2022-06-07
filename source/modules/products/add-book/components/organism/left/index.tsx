import React from 'react'

import { FinancialResources } from '@/types'
import { useFormikContext } from 'formik'

import Button from '@/components/atom/button'
import GetImageButton from '@/components/atom/get-image-button'
import DropdownComponent from '@/components/atom/select-dropdown'
import InputTags from '@/components/molecule/input-tags'
import SelectGenres from '@/components/molecule/select-genres'

import { IFormValues } from '../../../type'
import GetFileButton from '../../atoms/get-file-button'
import BookContent from '../../molecules/book-content'
import { Container, ContainerSelect, ContainerSend } from './styles'

const ItemsFinancialResources = [
  { label: 'Lei Aldir Blanc ', value: FinancialResources.LeiAldirBlanc },
  {
    label: 'Recursos do Artista',
    value: FinancialResources.RecursoDoArtista,
  },
  { label: 'Funcart', value: FinancialResources.Funcart },
  { label: 'Municipal', value: FinancialResources.Municipal },
  { label: 'Federal', value: FinancialResources.Federal },
]

const Left = () => {
  const { values, setFieldValue, isValid, handleSubmit } = useFormikContext<IFormValues>()

  const onHandleSubmit = () => handleSubmit()

  const onChange = (key: keyof IFormValues) => (value: any) => setFieldValue(key, value)

  return (
    <Container>
      <GetImageButton onChangeValue={onChange('thumbnail')} value={values.thumbnail} />
      <ContainerSelect>
        <DropdownComponent
          options={ItemsFinancialResources}
          labelDefault={'Recursos'.toUpperCase()}
          onChangeSelect={onChange('resource')}
        />
      </ContainerSelect>
      <GetFileButton value={values.pdf} onChangeValue={onChange('pdf')} />
      <ContainerSend>
        <BookContent />
        <InputTags tags={values.tags} onChangeTags={onChange('tags')} />
        <SelectGenres values={values.genres} onChangeValues={onChange('genres')} />
        <Button onPress={onHandleSubmit} text="Enviar Livro" disabled={!isValid} />
      </ContainerSend>
    </Container>
  )
}

export default Left
