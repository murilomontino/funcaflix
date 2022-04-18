import React from 'react'

import Details from './components/organism/details'
import Left from './components/organism/left'
import Right from './components/organism/right'
import { Container, ContainerDetails, ContainerRight, ContainerLeft } from './styles'

const Main = () => {
  return (
    <Container>
      <ContainerLeft>
        <Left />
      </ContainerLeft>
      <ContainerDetails>
        <Details />
      </ContainerDetails>
      <ContainerRight>
        <Right />
      </ContainerRight>
    </Container>
  )
}

export default Main
