import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import { Entypo } from '@expo/vector-icons'

import { useDrawer } from '@/context/DrawerMenu'

const ButtonOpenMenu = () => {
  const iconSize = useScaledSize(1.5)
  const { toggleDrawer } = useDrawer()
  return (
    <TouchableOpacity
      style={{
        padding: 8,
        marginRight: 8,
      }}
      onPress={toggleDrawer}
    >
      <Entypo name="menu" size={iconSize} color={'white'} />
    </TouchableOpacity>
  )
}

export default ButtonOpenMenu
