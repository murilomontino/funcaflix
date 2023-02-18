import React from 'react'

import theme from '@/theme'
import { FontAwesome } from '@expo/vector-icons'
import Link from 'next/link'

import {
	ButtonSocialContainer,
	ButtonSocialText,
	ContainerIconSocial,
} from './styles'

type Props = {
	name:
		| 'facebook'
		| 'twitter'
		| 'instagram'
		| 'youtube'
		| 'linkedin'
		| 'github'
		| 'pinterest'
		| 'google'
	url: string
}

const ColorButtonSocial = (name) => {
	switch (name) {
		case 'facebook':
			return '#3b5998'
		case 'twitter':
			return '#1da1f2'
		case 'instagram':
			return '#e1306c'
		case 'youtube':
			return '#ff0000'
		case 'linkedin':
			return '#0077b5'
		case 'github':
			return '#333'
		case 'pinterest':
			return '#CB2027'
		case 'google':
			return '#DD4B39'
		default:
			return '#333'
	}
}

const ButtonSocial = ({ name, url }: Props) => {
	const color = ColorButtonSocial(name)

	return (
		<Link href={url}>
			<a target="_blank" style={{ textDecoration: 'none' }}>
				<ButtonSocialContainer bgColor={color}>
					<ContainerIconSocial>
						<FontAwesome name={name} size={24} color={theme.COLORS.TEXT} />
					</ContainerIconSocial>
					<ButtonSocialText>Login com {name}</ButtonSocialText>
				</ButtonSocialContainer>
			</a>
		</Link>
	)
}

export default ButtonSocial
