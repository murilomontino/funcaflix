import React from 'react'
import { useScaledSize } from 'react-native-web-hooks'

import LogoFuncap from '@/components/atom/logo-funcapflix'

import { ContainerTitle, TitleLogo, Container, ContainerLogo } from './styles'

import { useSize } from '@/hooks/utils/use-size'

type Props = {
  widthLogo?: number
  textSize?: number
  widthContainer?: number
  subTitle?: string
}

const HeaderLogo = ({ textSize = 1, widthLogo = 3, widthContainer = 100, subTitle }: Props) => {
  const { size } = useSize()

  const TEXT_SIZE = useScaledSize(textSize)
  const SUB_TITLE_SIZE = useScaledSize(textSize - 1.1)

  return (
    <Container
      style={{
        justifyContent: size.width < 1127 ? 'center' : 'flex-start',
        marginTop: 80,
      }}
    >
      <ContainerLogo
        style={{
          width: widthContainer,
          maxWidth: widthContainer,
        }}
      >
        <LogoFuncap size={widthLogo} />
      </ContainerLogo>
      <ContainerTitle>
        <TitleLogo
          style={{
            fontSize: TEXT_SIZE,
            textAlign: size.width < 1127 ? 'center' : 'left',
          }}
        >
          Fundação de Cultura e Arte Aperipê
        </TitleLogo>
        {!!subTitle && (
          <TitleLogo
            style={{
              fontSize: SUB_TITLE_SIZE,
              textAlign: 'center',
              width: '100%',
            }}
          >
            {subTitle}
          </TitleLogo>
        )}
      </ContainerTitle>
    </Container>
  )
}

export default HeaderLogo
