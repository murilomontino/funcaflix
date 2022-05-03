import React, { useCallback, useState } from 'react'

import { Video } from 'expo-av'

import NotVideo from '@/logo-mapa-cultural.png'
import { GettersVideosInfo } from '@/types'

import InputFileHTML from '@/components/atom/input-file-html'

import CardInfoVideo from '../../molecules/card-info-video'
import { Container, ContainerRight } from './styles'

type Props = {
  item: GettersVideosInfo
}

const CardInsertVideo = ({ item }: Props) => {
  if (!item) return null

  const [file, setFile] = useState<File>()

  const onChangeFile = useCallback(
    (file: File) => {
      setFile(file)
    },
    [setFile]
  )
  return (
    <Container>
      <CardInfoVideo item={item} />
      <ContainerRight>
        <Video
          useNativeControls
          resizeMode="stretch"
          isLooping
          posterSource={NotVideo}
          style={{ width: 720, margin: 12 }}
          source={{
            uri: null,
          }}
        />
        <InputFileHTML onChange={onChangeFile} mimeType={['video/*']} />
      </ContainerRight>
    </Container>
  )
}

export default CardInsertVideo
