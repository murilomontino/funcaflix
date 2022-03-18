import React from 'react'
import { StyleSheet } from 'react-native'

import SkeletonCardWork from '@/modules/products/add-works-exhibition/molecule/card-work/skeleton'
import theme from '@/theme'

import { useResources } from '@/hooks/utils/use-resources'

const Lab = () => {
  const { isFontReady } = useResources()

  if (!isFontReady) {
    return null
  }

  return <SkeletonCardWork />
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
