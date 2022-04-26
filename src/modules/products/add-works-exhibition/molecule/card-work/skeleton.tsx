import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { TouchableOpacityProps, ViewStyle } from 'react-native'

import 'react-loading-skeleton/dist/skeleton.css'

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
  horizontal?: boolean
  ContainerStyle?: ViewStyle | ViewStyle[]
} & TouchableOpacityProps

const SkeletonCardWork = ({ horizontal = true, ContainerStyle, ...rest }: Props) => {
  const { SCREEN_SMALLER_THAN_MEDIUM_SIZE } = useSize()

  const flexDirection = SCREEN_SMALLER_THAN_MEDIUM_SIZE ? 'column' : horizontal ? 'row' : 'column'

  const width = horizontal ? 200 : '100%'
  const height = horizontal ? 200 : 200

  const HEIGHT_TOPIC = 20
  const HEIGHT_TITLE = 32

  const WIDTH_TOPIC = 200
  const WIDTH_TITLE = 250

  return (
    <Container style={[ContainerStyle, { flexDirection }]} {...rest}>
      <Skeleton width={width} height={height} />

      <ContainerInfo
        style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'space-between' }}
      >
        <Title>
          <Skeleton width={WIDTH_TITLE} height={HEIGHT_TITLE} />
        </Title>
        <ContainerBlocksInfos style={{ flex: 1, flexDirection: 'row' }}>
          <ContainerBlock>
            <Info>
              <Topic>
                <Skeleton width={WIDTH_TOPIC} height={HEIGHT_TOPIC} />
              </Topic>
            </Info>
            <Info>
              <Topic>
                <Skeleton width={WIDTH_TOPIC} height={HEIGHT_TOPIC} />
              </Topic>
            </Info>
            <Info>
              <Topic>
                <Skeleton width={WIDTH_TOPIC} height={HEIGHT_TOPIC} />
              </Topic>
            </Info>
          </ContainerBlock>
          <ContainerBlock>
            <Info>
              <Topic>
                <Skeleton width={WIDTH_TOPIC} height={HEIGHT_TOPIC} />
              </Topic>
            </Info>
            <Info>
              <Topic>
                <Skeleton width={WIDTH_TOPIC} height={HEIGHT_TOPIC} />
              </Topic>
            </Info>
            <Info>
              <Topic>
                <Skeleton width={WIDTH_TOPIC} height={HEIGHT_TOPIC} />
              </Topic>
            </Info>
            <Info>
              <Topic>
                <Skeleton width={WIDTH_TOPIC} height={HEIGHT_TOPIC} />
              </Topic>
            </Info>
          </ContainerBlock>
        </ContainerBlocksInfos>
      </ContainerInfo>
    </Container>
  )
}

export default SkeletonCardWork
