import React from 'react'
import { View } from 'react-native'

import theme from '@/theme'

import HeaderLogo from '@/components/atom/header-logo'
import Footer from '@/components/organism/footer'
import Header from '@/components/organism/header'

import { ContainerLogo, ContainerBackground, Container } from './styles'

const TemplateAddProduct: React.FC = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.COLORS.BACKGROUND_FOOTER,
      }}
    >
      <ContainerBackground>
        <Header />
        <ContainerLogo>
          <HeaderLogo />
        </ContainerLogo>
        <Container>{children}</Container>
        <Footer />
      </ContainerBackground>
    </View>
  )
}

export default TemplateAddProduct
