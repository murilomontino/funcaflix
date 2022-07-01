import React, { useMemo } from 'react'

import theme from '@/theme'
import { MotiView } from 'moti'

import Logo from '@/components/atom/logo-funcap'

import Img from '../image'
import { ContainerLogo, Title, ContainerImageBackground } from './styles'

type Props = {
  image: string
  title: string
  width: number | string
  unblur?: boolean
  height: number | string
} & Partial<typeof MotiView>

const ThumbnailImage = ({ image, title, width, height, unblur, ...rest }: Props) => {
  const TitleText = useMemo(() => {
    // retorna Title substituindo \s-\s : por \n
    return title?.replace(/[:]|(\s-\s)/g, '\n')
  }, [title])

  return (
    <ContainerImageBackground
      {...rest}
      transition={{
        type: 'timing',
        delay: theme.EFFECT.DELAY,
        duration: theme.EFFECT.DURATION,
      }}
      style={[
        {
          flex: 1,
          height: '100%',
          width: '100%',
          borderRadius: 1,
        },
      ]}
    >
      <>
        <Img
          image={image}
          alt={title}
          height={'100%'}
          width={'100%'}
          style={{
            position: 'absolute',
            top: 0,
          }}
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
