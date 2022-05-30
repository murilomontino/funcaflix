import React, { useMemo } from 'react'

import { Video } from 'expo-av'

import NotVideo from '@/public/videos-not-playing.webp'

import DragDrop from '@/components/atom/drag-drop'
import InputFileHTML from '@/components/atom/input-file-html'

import css from './css.module.css'
import { Container } from './styles'

type Props = {
  file: File
  onChangeFile: (file: File) => void
}

const CardInsertVideo = ({ file, onChangeFile }: Props) => {
  const fileMemo = useMemo(() => (file ? URL.createObjectURL(file) : null), [file])

  return (
    <Container>
      {file ? (
        <Video
          useNativeControls={!!fileMemo}
          resizeMode="stretch"
          isLooping
          posterSource={NotVideo}
          usePoster={!fileMemo}
          style={{ width: 720, margin: 12, maxHeight: 360 }}
          source={{
            uri: fileMemo,
          }}
        />
      ) : (
        <DragDrop
          label="Arraste ou selecione o video"
          classes={css.dragVideo}
          multiple={false}
          onChangeFile={onChangeFile}
          fileTypes={['MP4', 'AVI', 'MPEG']}
        />
      )}

      <InputFileHTML onChange={onChangeFile} mimeType={['video/*']} label="Selecione um Video" />
    </Container>
  )
}

export default CardInsertVideo
