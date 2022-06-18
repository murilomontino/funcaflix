import React, { useEffect, useState } from 'react'

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
  const [urlImage, setUrlImage] = useState<string>()

  const [isLoading, setIsLoading] = useState(false)

  const loadImage = () => {
    if (image && image.startsWith('http')) {
      return image
    }

    if (image) {
      return image
    }
  }

  useEffect(() => {
    const image = loadImage()
    if (image) {
      setUrlImage(image)
    }
  }, [image])

  if (!urlImage) return null

  return (
    <>
      <Image
        {...rest}
        src={urlImage}
        height={height}
        width={width}
        className={isLoading && unblur ? 'unblur' : ''}
        onLoadingComplete={() => setIsLoading(true)}
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
