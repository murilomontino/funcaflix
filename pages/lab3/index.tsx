import React from 'react'
import { StyleSheet } from 'react-native'

import theme from '@/theme'

import NavigationsDrawer from '@/navigations'

// import component 👇

//import styles 👇

const Lab = () => {
  return <NavigationsDrawer />
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
