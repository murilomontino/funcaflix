import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import theme from '@/theme'

import LogoFuncap from '@/components/atom/logo-funcap'

import { ContainerLogo, ContainerTitle, TitleLogo, Container } from './styles'

import { useResources } from '@/hooks/use-resources'
import { useSize } from '@/hooks/use-size'

const HeaderLogo = () => {
  const { size } = useSize()

  const TEXT_SIZE = useScaledSize(1)

  const WIDTH_LOGO = useScaledSize(3)

  const { isFontReady } = useResources()

  if (!isFontReady) {
    return (
      <Container>
        <ActivityIndicator size={'large'} color={theme.COLORS.WHITE} />
      </Container>
    )
  }

  return (
    <Container
      style={{
        justifyContent: size.width < 1127 ? 'center' : 'flex-start',
      }}
    >
      <ContainerLogo
        style={{
          maxWidth: WIDTH_LOGO,
        }}
      >
        <LogoFuncap size={3} />
      </ContainerLogo>
      <ContainerTitle>
        <TitleLogo
          style={{
            fontSize: TEXT_SIZE,
          }}
        >
          Fundação de Cultura e Arte Aperipê
        </TitleLogo>
      </ContainerTitle>
    </Container>
  )
}

export default HeaderLogo
