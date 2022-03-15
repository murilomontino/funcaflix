import React from 'react'
import { TouchableOpacityProps, ViewStyle } from 'react-native'

import { GettersExhibitions, GettersExhibitionsPhotos } from '@/types'

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

import FormatDate from '@/utils/format-date'

type Props = {
  item: GettersExhibitionsPhotos
  onPress?: (item: GettersExhibitions) => void
  horizontal?: boolean
  ContainerStyle?: ViewStyle | ViewStyle[]
  idExhibition?: string
} & TouchableOpacityProps

const CardPhoto = ({
  item,
  idExhibition,
  horizontal = false,
  ContainerStyle,

  ...rest
}: Props) => {
  const { SCREEN_SMALLER_THAN_MEDIUM_SIZE } = useSize()

  const flexDirection = SCREEN_SMALLER_THAN_MEDIUM_SIZE
    ? 'column'
    : horizontal
    ? 'row'
    : 'column'

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
      <ContainerInfo
        style={{ flex: 1, width: '100%', justifyContent: 'space-between' }}
      >
        <Title>{item.titulo}</Title>
        <ContainerBlocksInfos style={{ flex: 1, flexDirection: 'row' }}>
          <ContainerBlock>
            <Info>
              <Topic>Titulo:</Topic> {item.titulo}
            </Info>
            <Info>
              <Topic>Data:</Topic> {FormatDate(new Date(item.data))}
            </Info>
            <Info>
              <Topic>Descrição:</Topic> {item.descricao}
            </Info>
          </ContainerBlock>
        </ContainerBlocksInfos>
      </ContainerInfo>
    </Container>
  )
}

export default CardPhoto
