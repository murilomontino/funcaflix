import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

const ButtonOpenMenu = () => {
  const iconSize = useScaledSize(1.5)

  return (
    <TouchableOpacity
      style={{
        padding: 8,
        marginRight: 8,
      }}
      onPress={() => {}}
    >
      {/* <Entypo name="menu" size={iconSize} color={colors.grey20} /> */}
    </TouchableOpacity>
  )
}

export default ButtonOpenMenu
