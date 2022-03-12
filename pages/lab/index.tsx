import React from 'react'
import { View, StyleSheet } from 'react-native'

import NewWorksBox from '@/modules/products/add-works-exhibition/organism/new-works-box'
import theme from '@/theme'

import { useResources } from '@/hooks/utils/use-resources'

const Lab = () => {
  const { isFontReady } = useResources()

  if (!isFontReady) {
    return null
  }

  return (
    <View style={styles.containerCenter}>
      <NewWorksBox />
    </View>
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
    backgroundColor: theme.COLORS.BACKGROUND_BUTTON,
  },

  text: {
    fontSize: 16,
    color: theme.COLORS.TEXT,
  },
})
