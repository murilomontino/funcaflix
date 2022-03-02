import React from 'react'

import HeaderLogo from '@/components/atom/header-logo'
import Footer from '@/components/organism/footer'
import Header from '@/components/organism/header'

import { ContainerLogo, ContainerBackground, Container } from './styles'

const TemplateAddProduct: React.FC = ({ children }) => {
  return (
    <ContainerBackground>
      <Header />
      <ContainerLogo>
        <HeaderLogo />
      </ContainerLogo>
      <Container>{children}</Container>
      <Footer />
    </ContainerBackground>
  )
}

export default TemplateAddProduct
