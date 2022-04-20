import React from 'react'
import { View } from 'react-native'

import theme from '@/theme'

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
        backgroundColor: theme.COLORS.BACKGROUND_FRONTEND,
      }}
    >
      <Header />
      <Container>{children}</Container>
      <Footer />
    </View>
  )
}

export default TemplateFrontEnd
