import React from 'react'
import { useScaledSize } from 'react-native-web-hooks'

import HeaderLogo from '@/components/atom/header-logo'
import SkeletonHeadLogo from '@/components/atom/header-logo/skeleton'
import Footer from '@/components/organism/footer'
import Header from '@/components/organism/header'

import { ContainerLogo, ContainerBackground, Container } from './styles'

import { useResources } from '@/hooks/utils/use-resources'
import { useSize } from '@/hooks/utils/use-size'

const TemplateAddProduct: React.FC = ({ children }) => {
  const { isFontReady } = useResources()
  const { size } = useSize()
  const TEXT_SIZE = useScaledSize(1)

  const WIDTH_LOGO = useScaledSize(3)

  return (
    <ContainerBackground>
      <Header />
      <ContainerLogo>
        {isFontReady ? (
          <HeaderLogo />
        ) : (
          <SkeletonHeadLogo width={WIDTH_LOGO} textSize={TEXT_SIZE} />
        )}
      </ContainerLogo>
      <Container>{children}</Container>
      <Footer />
    </ContainerBackground>
  )
}

export default TemplateAddProduct
