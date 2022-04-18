import React from 'react'

import { FinancialResources, TypesProducts } from '@/types'

import GetImageButton from '@/components/atom/get-image-button'
import DropdownComponent from '@/components/atom/select-dropdown'
import InputTags from '@/components/molecule/input-tags'

import {
  useFormBookFinancialResources,
  useFormBookGenres,
  useFormBookThumbnail,
  useFormBookTags,
} from '@/forms/Product/product-book/hooks'

import GetFileButton from '../../atoms/get-file-button'
import SendFormBookButton from '../../atoms/send-form-book-button'
import BookContent from '../../molecules/book-content'
import { Container, ContainerSelect, ContainerSend } from './styles'

import { useSize } from '@/hooks/utils/use-size'

const ItemsTypesProducts = [
  { label: 'MP3', value: TypesProducts.MP3 },
  { label: 'Link', value: TypesProducts.URL },
  { label: 'PDF', value: TypesProducts.PDF },
]

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
  const { web, SCREEN_SMALLER_THAN_LARGE_SIZE } = useSize()
  const { onChangeFinancialResources } = useFormBookFinancialResources()

  const { thumbnail, onChangeThumbnail } = useFormBookThumbnail()

  const { genres, onChangeGenres } = useFormBookGenres()
  const { tags, onChangeTags } = useFormBookTags()

  return (
    <Container>
      <GetImageButton image={thumbnail} onChangeImage={onChangeThumbnail} />

      <ContainerSelect>
        <DropdownComponent
          options={ItemsFinancialResources}
          labelDefault={'Recursos'.toUpperCase()}
          onChangeSelect={onChangeFinancialResources}
        />
      </ContainerSelect>
      <GetFileButton />

      <ContainerSend>
        <InputTags tags={tags} onChangeTags={onChangeTags} />
        <BookContent />
        <SendFormBookButton />
      </ContainerSend>
    </Container>
  )
}

export default Left
