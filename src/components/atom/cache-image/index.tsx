import React, { useEffect, useState, memo } from 'react'
import { ImageStyle, StyleProp } from 'react-native'

import theme from '@/theme'
import { MotiImage, MotiProps } from 'moti'

import api from '@/services'

import NotCapa from '@/assets/no-capa.jpg'

import { getCache, setCache } from '@/utils/CacheStorageLocal'

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
  name,
  id,
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

    if (capa) {
      getImgStorage(capa)
    }

    // Se não tiver capa, seta a imagem como a capa padrão
    if (!capa) {
      setImg(NotCapa)
    }
  }, [uri, capa])

  const getImgStorage = async (capa: string) => {
    const arrayCapa = capa.split('.')
    const tipo = arrayCapa[arrayCapa.length - 1]

    const cache = await getCache(arrayCapa[0])

    if (!cache) {
      const { data } = await api.get(`image`, {
        params: {
          image: capa,
          name,
          id,
        },
      })
      setCache(arrayCapa[0], {
        data: data,
      })
      setImg(`data:image/${tipo};base64,`.concat(data))
    } else {
      setImg(`data:image/${tipo};base64,`.concat(cache.data as string))
    }
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
      defaultSource={NotCapa}
      source={{
        uri: img,
      }}
    />
  )
}

export default memo(CacheImage)
