import React, { useState } from 'react'
import { StyleSheet, TouchableOpacityProps, ViewStyle } from 'react-native'

import theme from '@/theme'
import { GettersExhibitionsWorks } from '@/types'

import Button from '@/components/atom/button'
import CacheImage from '@/components/atom/cache-image'
import InputTopic from '@/components/molecule/input-topic'

import {
  ContainerInfo,
  Info,
  Topic,
  Container,
  ContainerBlock,
  ContainerBlocksInfos,
} from './styles'

type Props = {
  item: Omit<
    GettersExhibitionsWorks,
    'id' | 'exibicaoId' | 'documentoId' | 'produtoId'
  >
  onPress?: (item: GettersExhibitionsWorks) => void
  horizontal?: boolean
  ContainerStyle?: ViewStyle | ViewStyle[]
  idExhibition?: string
} & TouchableOpacityProps

const CardWork = ({
  item,
  idExhibition,
  horizontal = false,
  ContainerStyle,
  ...rest
}: Props) => {
  const [topic, setTopic] = useState('')

  const flexDirection = horizontal ? 'row' : 'column'
  const width = horizontal ? 200 : '100%'
  const height = horizontal ? 200 : 200

  return (
    <Container
      style={[
        ContainerStyle,
        { flexDirection, minHeight: height + 20, width: '100%' },
      ]}
      {...rest}
    >
      <CacheImage
        capa={item.arquivo}
        name={'exhibition'}
        id={idExhibition}
        height={height}
        width={width}
        resizeMode={'stretch'}
      />
      <ContainerInfo>
        <InputTopic
          value={topic}
          onChangeText={setTopic}
          placeholder={'Título'}
          styleViewContainer={{
            width: '50%',
            maxHeight: 30,
            alignSelf: 'center',
          }}
        />
        <ContainerBlocksInfos
          style={{
            flex: 1,
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <ContainerBlock>
            <Info>
              <Topic>Ano:</Topic>
              <InputTopic
                value={topic}
                onChangeText={setTopic}
                styleViewContainer={{ maxHeight: 20 }}
              />
            </Info>
            <Info>
              <Topic>Artista:</Topic>
              <InputTopic
                value={topic}
                onChangeText={setTopic}
                styleViewContainer={{ maxHeight: 20 }}
              />
            </Info>
            <Info>
              <Topic>Dimensão:</Topic>
              <InputTopic
                value={topic}
                onChangeText={setTopic}
                styleViewContainer={{ maxHeight: 20 }}
              />
            </Info>
            <Info>
              <Topic>Tecnica:</Topic>
              <InputTopic
                value={topic}
                onChangeText={setTopic}
                styleViewContainer={{ maxHeight: 20 }}
              />
            </Info>
          </ContainerBlock>
          <ContainerBlock>
            <Info>
              <Topic>Edição:</Topic>
              <InputTopic
                value={topic}
                onChangeText={setTopic}
                styleViewContainer={{ maxHeight: 20 }}
              />
            </Info>
            <Info>
              <Topic>Impressão:</Topic>
              <InputTopic
                value={topic}
                onChangeText={setTopic}
                styleViewContainer={{ maxHeight: 20 }}
              />
            </Info>
            <Info>
              <Topic>Moldura:</Topic>
              <InputTopic
                value={topic}
                onChangeText={setTopic}
                styleViewContainer={{ maxHeight: 20 }}
              />
            </Info>
            <Button
              text="Aplicar"
              color={theme.COLORS.CONFIRM}
              style={styles.container}
              textStyle={styles.textButton}
            />
          </ContainerBlock>
        </ContainerBlocksInfos>
      </ContainerInfo>
    </Container>
  )
}

export default CardWork

const styles = StyleSheet.create({
  container: {
    width: 50,
    maxHeight: 30,
    borderWidth: 1,
    borderRadius: 2,
  },
  textButton: {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: theme.COLORS.TEXT,
  },
})
