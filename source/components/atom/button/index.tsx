import React from 'react'
import {
	TouchableOpacityProps,
	TextProps,
	StyleProp,
	ViewStyle,
	TextStyle,
} from 'react-native'

import { Container, Text } from './styles'

import colors from '@/global/colors'

interface Props extends TouchableOpacityProps {
	textProps?: TextProps
	text: string
	style?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[]
	textStyle?: StyleProp<TextStyle> | StyleProp<TextStyle>[]
	selectable?: boolean
	selected?: boolean
	color?: string
}

const Button = ({
	textProps,
	disabled,
	text,
	style,
	textStyle,
	selectable = false,
	selected = false,
	color = colors.button_secondary,
	...rest
}: Props) => {
	const colorButton = disabled ? colors.grey20 : color

	return (
		<Container
			{...rest}
			backgroundColor={colorButton}
			disabled={disabled}
			selectable={selectable}
			selected={selected}
			style={[style]}
		>
			<Text {...textProps} style={[textStyle]}>
				{text}
			</Text>
		</Container>
	)
}

export default Button
