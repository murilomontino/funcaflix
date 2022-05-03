import React from 'react'
import { StyleSheet, View } from 'react-native'

import theme from '@/theme'

import ArrayCarousel from '@/components/organism/array-carousel'
import TemplateFrontEnd from '@/components/templates/frontend'

const Lab = () => {
  return (
    <TemplateFrontEnd>
      <View
        style={{
          paddingTop: 100,
        }}
      >
        {ArrayCarousel()}
      </View>
    </TemplateFrontEnd>
  )
}

export default Lab

const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    height: 500,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.BACKGROUND_FRONTEND,
  },

  text: {
    fontSize: 16,
    color: theme.COLORS.TEXT,
  },
})
