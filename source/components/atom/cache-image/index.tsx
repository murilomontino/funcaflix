import React, { useEffect, useState, memo } from 'react'
import { ImageStyle, StyleProp } from 'react-native'

import theme from '@/theme'
import { MotiImage, MotiProps } from 'moti'
import { Skeleton } from 'moti/skeleton'

import NotCapa from '@/assets/no-capa.jpg'

type Props = {
  capa?: string
  name?: string
  id?: string
  height?: number | string
  width?: number | string
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
  imageStyle?: StyleProp<ImageStyle>
  uri?: string
} & MotiProps

const CacheImage = ({
  capa,
  uri,
  height = 200,
  width = 150,
  resizeMode = 'contain',
  imageStyle,
  ...rest
}: Props) => {
  const [img, setImg] = useState('')

  useEffect(() => {
    if (uri) {
      setImg(uri)
      return
    }

    // Se a capa for uma url, seta a imagem como a capa
    if (capa && capa?.includes('http')) {
      setImg(capa)
      return
    }

    if (capa && capa?.startsWith('/')) {
      setImg(capa)
      return
    }

    // Se não tiver capa, seta a imagem como a capa padrão
    if (!capa) {
      setImg(NotCapa)
    }
  }, [uri, capa])

  if (!img) {
    return <Skeleton height={'100%'} width={'100%'} colorMode="dark" />
  }

  return (
    <MotiImage
      {...rest}
      style={[
        {
          width,
          height,
        },
        imageStyle,
      ]}
      resizeMode={resizeMode}
      transition={{
        type: 'timing',
        delay: theme.EFFECT.DELAY,
        duration: theme.EFFECT.DURATION,
      }}
      onError={() => setImg(NotCapa)}
      source={{
        uri: img,
      }}
    />
  )
}

export default memo(CacheImage)
