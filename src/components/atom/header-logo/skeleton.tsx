import React from 'react'
import Skeleton from 'react-loading-skeleton'

import theme from '@/theme'

import { ContainerLogo, ContainerTitle, Container } from './styles'

import { useSize } from '@/hooks/use-size'

import 'react-loading-skeleton/dist/skeleton.css'

type Props = {
  width?: number
  textSize?: number
}

const SkeletonHeadLogo = ({ width, textSize }: Props) => {
  const { size } = useSize()

  return (
    <Container
      style={{
        justifyContent: size.width < 1127 ? 'center' : 'flex-start',
      }}
    >
      <ContainerLogo
        style={{
          maxWidth: width,
        }}
      >
        <Skeleton
          circle
          baseColor={theme.COLORS.SKELETON}
          duration={1}
          height={width + 20}
          width={width + 20}
        />
      </ContainerLogo>
      <ContainerTitle>
        <Skeleton
          height={textSize}
          width={400}
          duration={1}
          baseColor={theme.COLORS.SKELETON}
          style={{
            marginLeft: 20,
          }}
        />
      </ContainerTitle>
    </Container>
  )
}

export default SkeletonHeadLogo
