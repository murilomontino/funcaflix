import React, { useMemo } from 'react'

import { FontAwesome } from '@expo/vector-icons'
import Image from 'next/image'

type Props = {
  file: File
}

const PreviewElementFile = ({ file }: Props) => {
  const fileState = useMemo(() => URL.createObjectURL(file), [file])

  const mimetype = file.type.split('/')[0]

  if (!fileState) {
    return null
  }

  if (mimetype === 'image') {
    return <Image src={fileState} layout="fill" />
  }

  if (mimetype === 'video') {
    return (
      <video
        src={fileState}
        controls
        style={{
          backgroundColor: 'transparent',
          width: '100%',
          height: '100%',
        }}
      />
    )
  }

  if (mimetype === 'audio') {
    return (
      <audio
        src={fileState}
        controls
        style={{
          width: '100%',
        }}
      />
    )
  }

  return (
    <FontAwesome
      name="file-o"
      size={72}
      color="#fff"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  )
}

export default PreviewElementFile
