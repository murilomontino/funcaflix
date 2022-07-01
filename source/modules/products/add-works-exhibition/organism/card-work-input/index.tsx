/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react'
import { TouchableOpacityProps, ViewStyle } from 'react-native'

import { GettersExhibitionsWorks } from '@/types'

import CacheImage from '@/components/atom/cache-image'

import { keysWorks, Argument } from '@/forms/Product/product-works/type'

import InputInfos from '../../molecule/input-infos'
import { Container } from './styles'

import { useSize } from '@/hooks/utils/use-size'

type Props = {
  item: Map<keysWorks, Argument>
  onPress?: (item: GettersExhibitionsWorks) => void
  horizontal?: boolean
  ContainerStyle?: ViewStyle | ViewStyle[]
  idExhibition?: string
  image: string
  onChangeAttrYearWork: (value: string) => void
  onChangeAttrArtistWork: (value: string) => void
  onChangeAttrTitleWork: (value: string) => void
  onChangeAttrDimensionWork: (value: string) => void
  onChangeAttrEditionWork: (value: string) => void
  onChangeAttrPrintWork: (value: string) => void
  onChangeAttrMoldWork: (value: string) => void
  onChangeAttrOriginalWork: (value: boolean) => void
  onChangeAttrTechniqueWork: (value: string) => void
  submit: (id: string) => Promise<void>
} & TouchableOpacityProps

const CardWork = ({
  item,
  idExhibition,
  horizontal = false,
  ContainerStyle,
  image,
  onChangeAttrYearWork,
  onChangeAttrArtistWork,
  onChangeAttrTitleWork,
  onChangeAttrDimensionWork,
  onChangeAttrEditionWork,
  onChangeAttrPrintWork,
  onChangeAttrMoldWork,
  onChangeAttrOriginalWork,
  onChangeAttrTechniqueWork,
  submit,
  ...rest
}: Props) => {
  const { SCREEN_SMALLER_THAN_MEDIUM_SIZE } = useSize()
  const width = horizontal ? 200 : '100%'
  const height = horizontal ? 200 : 200

  const flexDirection = SCREEN_SMALLER_THAN_MEDIUM_SIZE ? 'column' : horizontal ? 'row' : 'column'

  const heightContainer = SCREEN_SMALLER_THAN_MEDIUM_SIZE ? height * 3 : height + 20

  const widthContainer = SCREEN_SMALLER_THAN_MEDIUM_SIZE ? '95%' : '98.5%'

  const renderImage = useMemo(() => {
    return (
      <CacheImage
        imageStyle={{
          alignSelf: 'center',
        }}
        capa={image}
        name={'exhibition'}
        id={idExhibition}
        height={height}
        width={width}
        resizeMode={'stretch'}
      />
    )
  }, [image, idExhibition, height, width])

  return (
    <Container
      style={[
        ContainerStyle,
        {
          flexDirection,
          minHeight: heightContainer,
          height: heightContainer,
          minWidth: widthContainer,
          maxWidth: widthContainer,
        },
      ]}
      {...rest}
    >
      {renderImage}
      <InputInfos
        valueArtist={item.get('artista') as string}
        valueTitle={item.get('titulo') as string}
        valueYear={item.get('ano') as string}
        valueDimension={item.get('dimensao') as string}
        valueEdition={item.get('edicao') as string}
        valuePrint={item.get('impressao') as string}
        valueMold={item.get('moldura') as string}
        valueOriginal={item.get('obra_original') as any}
        valueTechnique={item.get('tecnica') as string}
        onChangeAttrYearWork={onChangeAttrYearWork}
        onChangeAttrArtistWork={onChangeAttrArtistWork}
        onChangeAttrTitleWork={onChangeAttrTitleWork}
        onChangeAttrDimensionWork={onChangeAttrDimensionWork}
        onChangeAttrEditionWork={onChangeAttrEditionWork}
        onChangeAttrPrintWork={onChangeAttrPrintWork}
        onChangeAttrMoldWork={onChangeAttrMoldWork}
        onChangeAttrOriginalWork={onChangeAttrOriginalWork}
        onChangeAttrTechniqueWork={onChangeAttrTechniqueWork}
        idWork={item.get('id') as string}
        submit={submit}
      />
    </Container>
  )
}

export default CardWork
