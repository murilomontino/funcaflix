import React from 'react'
import { View } from 'react-native'

import Footer from '@/components/organism/footer'
import Header from '@/components/organism/header'

import { Container } from './styles'

import { useSize } from '@/hooks/utils/use-size'

const TemplateFrontEnd: React.FC = ({ children }) => {
  const {
    size: { height },
  } = useSize()

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header />
      <Container
        style={{
          minHeight: height,
        }}
      >
        {children}
      </Container>
      <Footer />
    </View>
  )
}

export default TemplateFrontEnd
