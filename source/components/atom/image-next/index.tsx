import React from 'react'

import Image, { ImageProps } from 'next/image'

type Props = {
  image?: string
  height?: number | string
  width?: number | string
  unblur?: boolean
  url?: string
} & Partial<ImageProps>

const ImageNext = ({
  image,
  height = 200,
  width = 150,
  unblur = false,
  url = 'image?id=',
  ...rest
}: Props) => {
  const [urlImage] = React.useState(() => {
    if (image && image.startsWith('http')) {
      return image
    }

    if (image) {
      return process.env._currentURL + url + image
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
