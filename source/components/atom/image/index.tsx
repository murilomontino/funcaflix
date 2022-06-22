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

const imageLoader = (image: string, staticImage: boolean) => {
  if (!image || image?.startsWith('Não')) {
    return noCapa
  }

  if (staticImage && image) {
    return image
  }

  if (image && image.startsWith('http')) {
    return image
  }

  return process.env._currentURL + 'images/' + image
}

const Img = ({
  image,
  style,
  height = 200,
  width = 150,
  updateClassName,
  staticImage = false,
  ...rest
}: Props) => {
  const src = image.replace('imagens/', '')

  const imageStyle = updateClassName
    ? {}
    : {
        height,
        width,
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
      src={imageLoader(src, staticImage)}
      style={{ ...imageStyle, ...style }}
      loading="lazy"
      {...rest}
    />
  )
}

export default Img
