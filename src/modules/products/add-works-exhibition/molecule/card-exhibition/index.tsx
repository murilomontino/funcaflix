import React from 'react'
import { TouchableOpacityProps, ViewStyle } from 'react-native'

import { GettersExhibitions, mapFinancialResources } from '@/types'
import { cpf, cnpj } from 'cpf-cnpj-validator'

import CacheImage from '@/components/atom/cache-image'
import CardTag from '@/components/atom/card-tag'

import AboutTheWork from '../about-the-work'
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
  horizontal?: boolean
  ContainerStyle?: ViewStyle | ViewStyle[]
} & TouchableOpacityProps

const CardExhibition = ({
  item,
  all,
  horizontal = false,
  ContainerStyle,
  ...rest
}: Props) => {
  const renderCPF = () => {
    if (item.cpf) {
      return (
        <Info key={item.cpf}>
          <Topic>CPF:</Topic>
          {cpf.format(item.cpf)}
        </Info>
      )
    }
  }

  const renderCNPJ = () => {
    if (item.cnpj) {
      return (
        <Info key={item.cnpj}>
          <Topic>CNPJ:</Topic>
          {cnpj.format(item.cnpj)}
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

  const flexDirection = horizontal ? 'row' : 'column'
  const width = horizontal ? 200 : '100%'
  const height = horizontal ? '100%' : 200

  return (
    <Container style={[ContainerStyle, { flexDirection }]} {...rest}>
      <CacheImage
        capa={item.image}
        height={height}
        width={width}
        resizeMode={'stretch'}
      />
      <ContainerInfo
        style={{ flex: 1, width: '100%', justifyContent: 'space-between' }}
      >
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
      {!horizontal && (
        <ContainerInfo style={{ flex: 2, paddingBottom: 10, width: '100%' }}>
          <CardTag tags={item.tags} />
          <AboutTheWork about={item.sobre_a_obra} />
        </ContainerInfo>
      )}
    </Container>
  )
}

export default CardExhibition
