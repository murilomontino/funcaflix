import React from 'react'
import { View, StyleSheet } from 'react-native'

import PhotosOfEvent from '@/modules/products/add-exhibition/components/organism/photos-of-event'
import theme from '@/theme'

import FormProductExhibitionProvider from '@/forms/Product/product-exhibition'

const Lab = () => {
  return (
    <View style={styles.containerCenter}>
      <FormProductExhibitionProvider>
        <PhotosOfEvent />
      </FormProductExhibitionProvider>
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
