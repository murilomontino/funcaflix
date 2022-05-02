import React from 'react'

import Footer from '@/components/organism/footer'
import Header from '@/components/organism/header'

import { Container, ContainerChildren, ContainerHeader } from './styles'

type Props = {
  children: React.ReactNode | React.FC | React.Component | JSX.Element
}

const TemplateFrontEnd = ({ children }: Props) => {
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
