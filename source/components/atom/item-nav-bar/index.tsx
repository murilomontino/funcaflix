import React, { useRef } from 'react'
import { StyleSheet, TouchableOpacity, FontVariant } from 'react-native'
import { useHover } from 'react-native-web-hooks'

import theme from '@/theme'
import Link from 'next/link'

import { Text as StyledText } from './styles'

type Props = {
	title: string
	link?: string
	select?: boolean
	fontVariant?: FontVariant
	passHref?: boolean
	disabled?: boolean
}

const ItemNavBar: React.FC<Props> = ({
	title,
	link,
	select = true,
	fontVariant = 'small-caps',
	passHref = false,
	disabled = false,
}) => {
	const ref = useRef(null)
	const hover = useHover(ref)

	if (passHref) {
		return (
			<a href={link} style={{ textDecoration: 'none' }}>
				<TouchableOpacity style={styles.buttonNav} disabled={disabled}>
					<StyledText disabled={disabled} hover={hover} ref={ref}>
						{/* Icone <a className de cadeado /> */}
						{title}
					</StyledText>
				</TouchableOpacity>
			</a>
		)
	}

	return (
		<TouchableOpacity style={styles.buttonNav} disabled={disabled}>
			<Link href={disabled ? '#' : link} passHref={passHref}>
				<StyledText
					disabled={disabled}
					hover={hover}
					ref={ref}
					/*  style={[{ fontSize, fontVariant: [fontVariant] }, styles.textNav]} */
				>
					{title}
				</StyledText>
			</Link>
		</TouchableOpacity>
	)
}

export default ItemNavBar

const styles = StyleSheet.create({
	textNav: {
		color: theme.COLORS.TEXT_PRIMARY,
		fontWeight: '700',
	},
	hoverText: {
		color: '#ffbd03',
		fontWeight: 'bold',
	},
	buttonNav: {
		padding: 4,
		marginHorizontal: 4,
	},
	selectText: {},
})
