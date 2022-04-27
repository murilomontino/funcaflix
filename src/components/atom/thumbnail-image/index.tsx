import React, { useMemo } from 'react'

import theme from '@/theme'
import { MotiProps, MotiView } from 'moti'

import Logo from '@/components/atom/logo-funcap'

import CacheImage from '../cache-image'
import { ContainerLogo, Title, ContainerImageBackground } from './styles'

type Props = {
  image: string
  hover: boolean
  title: string
} & MotiProps

const ThumbnailImage = ({ hover, image, title, ...rest }: Props) => {
  const TitleText = useMemo(() => {
    // retorna Title substituindo \s-\s : por \n
    return title?.replace(/[:]|(\s-\s)/g, '\n')
  }, [title])

  return (
    <ContainerImageBackground
      {...rest}
      transition={{
        type: 'timing',
        delay: theme.EFFECT.DELAY - 100,
        duration: theme.EFFECT.DURATION - 100,
      }}
      style={[
        {
          flex: 1,
          height: '100%',
          width: '100%',
          borderRadius: 1,
        },
        hover && {
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        },
      ]}
    >
      <>
        <CacheImage
          capa={image}
          resizeMode="stretch"
          name="videos"
          imageStyle={[
            {
              borderRadius: 2,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            },
            hover && {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 2,
              borderTopRightRadius: 2,
              borderWidth: 1,
              borderColor: theme.COLORS.BUTTON_SECONDARY,
              borderBottomWidth: 0,
            },
          ]}
        />
        <ContainerLogo>
          <Logo size={1.5} />
        </ContainerLogo>
        <MotiView
          animate={{
            width: '100%',
          }}
          transition={{
            type: 'timing',
            delay: theme.EFFECT.DELAY,
            duration: theme.EFFECT.DURATION,
          }}
          style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
        >
          <Title>{TitleText}</Title>
        </MotiView>
      </>
    </ContainerImageBackground>
  )
}

export default ThumbnailImage
