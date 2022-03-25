import React from 'react'
import { View } from 'react-native'

import Details from './components/organism/details'

import { useSize } from '@/hooks/utils/use-size'

const Main = () => {
  const { size } = useSize()

  return (
    <View>
      <Details />
    </View>
  )
}

export default Main
