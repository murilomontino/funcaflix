import React from 'react'

import Footer from '@/components/organism/footer'
import Header from '@/components/organism/header'

import { Container, ContainerChildren, ContainerHeader } from './styles'

const TemplateFrontEnd: React.FC = ({ children }) => {
  return (
    <Container>
      <ContainerHeader>
        <Header />
      </ContainerHeader>
      <ContainerChildren>{children}</ContainerChildren>
      <Footer />
    </Container>
  )
}

export default TemplateFrontEnd
