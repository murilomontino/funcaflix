import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { GettersExhibitions, mapFinancialResources } from '@/types'

import CacheImage from '@/components/atom/cache-image'

import {
  ContainerInfo,
  Title,
  Info,
  Topic,
  Container,
  ContainerBlock,
  ContainerBlocksInfos,
} from './styles'

import FormatDate from '@/utils/format-date'

type Props = {
  item: GettersExhibitions
  onPress?: (item: GettersExhibitions) => void
  all?: boolean
} & TouchableOpacityProps

const CardExhibition = ({ item, all, ...rest }: Props) => {
  const renderCPF = () => {
    if (item.cpf) {
      return (
        <Info key={item.cpf}>
          <Topic>CPF:</Topic>
          {item.cpf}
        </Info>
      )
    }
  }

  const renderCNPJ = () => {
    if (item.cnpj) {
      return (
        <Info key={item.cnpj}>
          <Topic>CNPJ:</Topic>
          {item.cnpj}
        </Info>
      )
    }
  }

  const renderRecurso = () => {
    const resource = mapFinancialResources.find(
      (resource) => item.recurso === resource.id
    )

    if (resource) {
      return (
        <Info key={item.recurso}>
          <Topic>Recurso:</Topic>
          {resource.recursos}
        </Info>
      )
    }
    return null
  }

  const renderAllInfo = () => {
    return (
      <ContainerBlock>
        {renderCPF()}
        {renderCNPJ()}
        {renderRecurso()}
      </ContainerBlock>
    )
  }

  const renderInfo = () => {
    const keysValid = ['sobre a obra', 'tags']

    return Object.keys(item).map((key) => {
      if (keysValid.includes(key)) {
        return (
          <Info key={key}>
            <Topic>{key}:</Topic>
            {item[key]}
          </Info>
        )
      }
      return null
    })
  }

  return (
    <Container {...rest}>
      <CacheImage
        capa={item.image}
        height={140}
        width={140}
        resizeMode={'cover'}
      />
      <ContainerInfo style={{ flex: 1 }}>
        <Title>{item.titulo}</Title>
        <ContainerBlocksInfos style={{ flex: 1, flexDirection: 'row' }}>
          <ContainerBlock>
            <Info>
              <Topic>Artista:</Topic> {item.artista}
            </Info>

            <Info>
              <Topic>Localidade:</Topic> {item.local}
            </Info>

            <Info>
              <Topic>Data de Inicio:</Topic>{' '}
              {FormatDate(new Date(item.data_de_inicio))}
            </Info>
            <Info>
              <Topic>Data de Fim:</Topic>{' '}
              {FormatDate(new Date(item.data_de_fim))}
            </Info>
          </ContainerBlock>
          {all && renderAllInfo()}
        </ContainerBlocksInfos>
      </ContainerInfo>
    </Container>
  )
}

export default CardExhibition
