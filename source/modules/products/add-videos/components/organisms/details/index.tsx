import React, { useCallback } from 'react'

import theme from '@/theme'
import { TypesProducts } from '@/types'
import { FontAwesome } from '@expo/vector-icons'
import { MotiView } from 'moti'

import SelectDropdown from '@/components/atom/select-dropdown'

import { useFormVideoType } from '@/forms/Product/product-video/hooks'

import CardInfoVideo from '../../molecules/card-info-video'
import CardInsertURL from '../../molecules/card-insert-url'
import CardInsertVideo from '../../molecules/card-insert-video'
import { Container, ContainerRight, ContainerCentered, Warning } from './styles'

const mapTypesVideo = [
  {
    value: TypesProducts.MP4,
    label: 'MP4',
  },
  {
    value: TypesProducts.LINK,
    label: 'Link',
  },
]

const DetailsVideo = ({ item }) => {
  if (!item) return null
  const { onChangeType, type } = useFormVideoType()

  const ContainerVideo = useCallback(() => {
    if (type?.toString() === TypesProducts.MP4.toString()) {
      return (
        <ContainerCentered>
          <CardInsertVideo />
        </ContainerCentered>
      )
    }

    if (type?.toString() === TypesProducts.LINK.toString()) {
      return (
        <ContainerCentered>
          <CardInsertURL />
        </ContainerCentered>
      )
    }

    return (
      <ContainerCentered>
        <MotiView
          from={{
            translateY: -200,
          }}
          animate={{
            translateY: 0,
          }}
          transition={{
            loop: true,
            type: 'timing',
            duration: 1500,
            delay: 100,
          }}
        >
          <FontAwesome name="arrow-up" color={theme.COLORS.TEXT} size={32} />
        </MotiView>
        <Warning>Selecione um Tipo para prosseguir</Warning>
      </ContainerCentered>
    )
  }, [type])

  return (
    <Container>
      <CardInfoVideo item={item} />
      <ContainerRight>
        <SelectDropdown
          options={mapTypesVideo}
          labelDefault="Tipo de Video"
          onChangeSelect={onChangeType}
        />
        <ContainerVideo />
      </ContainerRight>
    </Container>
  )
}

export default DetailsVideo
