import React, { useRef } from 'react'
import { TouchableOpacity } from 'react-native'
import { useHover, useScaledSize } from 'react-native-web-hooks'

import theme from '@/theme'
import { Entypo } from '@expo/vector-icons'

import { useDrawer } from '@/context/DrawerMenu'

const ButtonOpenMenu = () => {
	const ref = useRef()
	const hover = useHover(ref)
	const iconSize = useScaledSize(1.5)

	const color = !hover ? theme.COLORS.TEXT : 'orange'

	const { toggleDrawer } = useDrawer()
	return (
		<TouchableOpacity
			ref={ref}
			style={{
				padding: 8,
				marginRight: 8,
			}}
			onPress={toggleDrawer}
		>
			<Entypo name="menu" size={iconSize} color={color} />
		</TouchableOpacity>
	)
}

export default ButtonOpenMenu
