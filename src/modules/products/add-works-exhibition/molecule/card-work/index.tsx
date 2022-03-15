import React from 'react'
import { TouchableOpacityProps, ViewStyle } from 'react-native'

import { GettersExhibitionsWorks } from '@/types'

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

import { useSize } from '@/hooks/utils/use-size'

type Props = {
  item: GettersExhibitionsWorks
  onPress?: (item: GettersExhibitionsWorks) => void
  horizontal?: boolean
  ContainerStyle?: ViewStyle | ViewStyle[]
  idExhibition?: string
} & TouchableOpacityProps

const CardWork = ({ item, idExhibition, horizontal = false, ContainerStyle, ...rest }: Props) => {
  const { SCREEN_SMALLER_THAN_MEDIUM_SIZE } = useSize()

  const flexDirection = SCREEN_SMALLER_THAN_MEDIUM_SIZE ? 'column' : horizontal ? 'row' : 'column'

  const width = horizontal ? 200 : '100%'
  const height = horizontal ? 200 : 200

  return (
    <Container style={[ContainerStyle, { flexDirection }]} {...rest}>
      <CacheImage
        capa={item.arquivo}
        name={'exhibition'}
        id={idExhibition}
        height={height}
        width={width}
        resizeMode={'stretch'}
      />
      <ContainerInfo style={{ flex: 1, width: '100%', justifyContent: 'space-between' }}>
        <Title>{item.titulo}</Title>
        <ContainerBlocksInfos style={{ flex: 1, flexDirection: 'row' }}>
          <ContainerBlock>
            <Info>
              <Topic>Ano:</Topic> {item.ano}
            </Info>
            <Info>
              <Topic>Artista:</Topic> {item.artista}
            </Info>
            <Info>
              <Topic>Dimensão:</Topic> {item.dimensao}
            </Info>
          </ContainerBlock>
          <ContainerBlock>
            <Info>
              <Topic>Edição:</Topic> {item.edicao}
            </Info>
            <Info>
              <Topic>Impressão:</Topic> {item.impressao}
            </Info>
            <Info>
              <Topic>Moldura:</Topic> {item.moldura}
            </Info>
            <Info>
              <Topic>Tecnica:</Topic> {item.tecnica}
            </Info>
          </ContainerBlock>
        </ContainerBlocksInfos>
      </ContainerInfo>
    </Container>
  )
}

export default CardWork
