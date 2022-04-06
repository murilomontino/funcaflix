import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import theme from '@/theme'
import { FinancialResources } from '@/types'

import SelectDropdown from '@/components/atom/select-dropdown'

import { mapFinancialResources } from '@/forms/Product/types'

const Lab = () => {
  const [selected, setSelected] = useState<FinancialResources>(0)

  useEffect(() => {
    console.log('selected', selected)
  }, [selected])

  const onChangeSelect = (value: FinancialResources) => {
    setSelected(value)
  }

  return (
    <View style={styles.containerCenter}>
      <SelectDropdown options={mapFinancialResources} onChangeSelect={onChangeSelect} />
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
