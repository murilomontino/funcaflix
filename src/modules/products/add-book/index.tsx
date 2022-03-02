import React from 'react'

import Details from './components/organism/details'
import Left from './components/organism/left'
import Right from './components/organism/right'
import { Container } from './styles'

import { useSize } from '@/hooks/use-size'

const Main = () => {
  const { SCREEN_SMALLER_THAN_LARGE_SIZE } = useSize()

  return (
    <Container
      style={[
        SCREEN_SMALLER_THAN_LARGE_SIZE && {
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      ]}
    >
      <Left />
      <Details />
      <Right />
    </Container>
  )
}

export default Main
