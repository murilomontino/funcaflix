import React from 'react'
import { ImageStyle, StyleProp } from 'react-native'

import Image, { ImageProps } from 'next/image'

type Props = {
  image?: string
  height?: number | string
  width?: number | string
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
  imageStyle?: StyleProp<ImageStyle>
  unblur?: boolean
  uri?: string
} & Partial<ImageProps>

const url = process.env._currentURL + 'videos/thumbnail?id='

const ImageNext = ({ image, height = 200, width = 150, unblur = false, ...rest }: Props) => {
  const [urlImage] = React.useState(() => {
    if (image && image.startsWith('http')) {
      return image
    }

    if (image) {
      return url + image
    }
  })

  const [loaded, setLoaded] = React.useState(false)

  if (!urlImage) return null

  return (
    <>
      <Image
        {...rest}
        src={urlImage}
        height={height}
        width={width}
        quality={75}
        className={loaded && unblur ? 'unblur' : ''}
        onLoadingComplete={() => setLoaded(true)}
      />
      <style jsx global>{`
        .unblur {
          animation: unblur 0.5s linear;
        }

        @keyframes unblur {
          from {
            filter: blur(20px);
          }
          to {
            filter: blur(0);
          }
        }
      `}</style>
    </>
  )
}

export default ImageNext
