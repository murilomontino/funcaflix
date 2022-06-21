import React from 'react'

import noCapa from '@/public/no-capa.jpg'
import { ImageProps } from 'next/image'

type Props = {
  image?: string
  staticImage?: boolean
  height?: number | string
  width?: number | string
  updateClassName?: string
  url?: string
} & Partial<ImageProps>

const Img = ({
  image,
  style,
  height = 200,
  width = 150,
  url = 'image?id=',
  updateClassName,
  staticImage = false,
  ...rest
}: Props) => {
  const imageStyle = updateClassName
    ? {}
    : {
        height,
        width,
      }

  const imageLoader = (image: string) => {
    if (!image || image?.startsWith('Não')) {
      return noCapa
    }

    if (staticImage && image) {
      return image
    }

    if (image && image.startsWith('http')) {
      return image
    }

    return process.env._currentURL + url + image
  }

  const handleError = (e) => {
    e.onerror = ''
    e.src = noCapa
    return true
  }

  if (!image) return null

  return (
    <img
      onError={handleError}
      src={imageLoader(image)}
      style={{ ...imageStyle, ...style }}
      loading="lazy"
      {...rest}
    />
  )
}

export default Img
