import React from 'react'
import { Image } from 'react-native'

import theme from '@/theme'

import Logo from '@/components/atom/logo-funcap'

import { ContainerLogo, Title, ContainerImageBackground } from './styles'

type Props = {
  image: string
  hover: boolean
  maxHeight?: number | string
  title: string
}

const ThumbnailImage = ({ hover, image, maxHeight, title }: Props) => {
  return (
    <ContainerImageBackground
      resizeMode="stretch"
      style={[
        {
          width: '100%',
          height: '100%',
        },
        hover
          ? {
              height: maxHeight,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }
          : {
              borderRadius: 1,
            },
      ]}
    >
      <>
        <Image
          source={{ uri: image }}
          style={[
            {
              borderRadius: 4,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            },
            hover && {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            },
          ]}
        />
        <ContainerLogo>
          <Logo size={hover ? 2 : 1} />
        </ContainerLogo>
        <Title
          animate={{
            backgroundColor: hover ? theme.COLORS.TARGET_TITLE._30 : theme.COLORS.TARGET_TITLE._50,
          }}
          style={[
            hover && {
              fontSize: 16,
            },
          ]}
        >
          {title}
        </Title>
      </>
    </ContainerImageBackground>
  )
}

export default ThumbnailImage
