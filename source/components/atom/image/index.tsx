import React from 'react'

import noCapa from '@/public/no-capa.jpg'
import { ImageProps } from 'next/image'

type Props = {
  image?: string
  endpoint?: string
  staticImage?: boolean
  height?: number | string
  width?: number | string
  updateClassName?: string
  url?: string
} & Partial<ImageProps>

const imageLoader = (image: string, staticImage: boolean, endpoint = 'images/') => {
  if (!image || image?.startsWith('Não')) {
    return noCapa
  }

  if (staticImage && image) {
    return image
  }

  if (image && image.startsWith('http')) {
    return image
  }

  const url = process.env._currentURL + endpoint + image

  return url
}

const Img = ({ image, staticImage = false, endpoint, ...rest }: Props) => {
  const src = image.replace('imagens/', '')

  const handleError = (e) => {
    e.onerror = ''
    e.src = noCapa
    return true
  }

  if (!image) return null

  return (
    <img
      onError={handleError}
      src={imageLoader(src, staticImage, endpoint)}
      loading="lazy"
      {...rest}
    />
  )
}

export default Img
