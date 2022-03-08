import React from 'react'
import { View, StyleSheet } from 'react-native'

import AboutTheWork from '@/modules/products/add-works-exhibition/molecule/about-the-work'
import theme from '@/theme'

const about =
  'loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const Lab = () => {
  return (
    <View style={styles.containerCenter}>
      <AboutTheWork about={about} />
    </View>
  )
}

export default Lab

const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.BACKGROUND_FRONTEND,
  },

  text: {
    fontSize: 16,
    color: theme.COLORS.TEXT,
  },
})
