import React from 'react'
import { View } from 'react-native'

import { FinancialResources, TypesProducts } from '@/types'

import GetImageButton from '@/components/atom/get-image-button'
import InputTags from '@/components/molecule/input-tags'

import {
  useFormBookCategory,
  useFormBookFinancialResources,
  useFormBookGenres,
  useFormBookThumbnail,
} from '@/forms/Product/product-book/hooks'

import GetFileButton from '../../atoms/get-file-button'

import { useSize } from '@/hooks/use-size'

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
  const { size, web, SCREEN_SMALLER_THAN_LARGE_SIZE } = useSize()
  const { onChangeType, type } = useFormBookCategory()
  const { onChangeFinancialResources, financialResources } =
    useFormBookFinancialResources()

  const { thumbnail, onChangeThumbnail } = useFormBookThumbnail()

  const { genres, onChangeGenres } = useFormBookGenres()

  const [tags, setTags] = React.useState<string[]>([])

  const onChangeTags = (text: string[]) => {
    setTags(text)
  }

  return (
    <View
      style={{
        maxWidth: SCREEN_SMALLER_THAN_LARGE_SIZE ? '80%' : 300,
        justifyContent: 'flex-start',
        marginLeft: web ? 0 : 40,
        borderColor: 'rgba(0,0,0, 0.4)',
      }}
    >
      <GetImageButton image={thumbnail} onChangeImage={onChangeThumbnail} />
      <GetFileButton />
      <InputTags tags={tags} onChangeTags={onChangeTags} />
    </View>
  )
}

export default Left
