import React from 'react'
import { View } from 'react-native'

import Details from './components/organism/details'
import Left from './components/organism/left'
import Right from './components/organism/right'

import { useSize } from '@/hooks/utils/use-size'

const Main = () => {
  const { size } = useSize()

  return (
    <View
      style={[
        {
          flex: 1,
          marginTop: 40,
          padding: 40,
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
        },
        size.width < 1127 && {
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      ]}
    >
      <Left />
      <Details />
      <Right />
    </View>
  )
}

export default Main
