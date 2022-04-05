import React from 'react'
import { StyleSheet, View } from 'react-native'

import theme from '@/theme'

import SelectDropdown from '@/components/atom/select-dropdown'

const Lab = () => {
  return (
    <View style={styles.containerCenter}>
      <SelectDropdown />
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
