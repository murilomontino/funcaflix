import React from 'react'

import theme from '@/theme'

import Logo from '@/components/atom/logo-funcap'

import { ContainerLogo, Title, ContainerImageBackground } from './styles'

type Props = {
  image: string
  width: number
  height: number
  hover: boolean
  maxWidth: number
  maxHeight?: number
  borderRadius?: number
  title: string
}

const ThumbnailImage = ({
  height,
  hover,
  image,
  maxHeight,
  maxWidth,
  title,
  width,
  borderRadius,
}: Props) => {
  const heightHover = (maxHeight ?? height) - 8
  const widthHover = maxWidth - 8

  return (
    <ContainerImageBackground
      source={{ uri: image }}
      resizeMode="stretch"
      style={[
        hover
          ? {
              height: heightHover,
              width: widthHover,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }
          : {
              borderRadius: borderRadius ?? 0,
              height: height,
              width: width,
            },
      ]}
    >
      <>
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
