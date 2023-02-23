import React from 'react'
import { View } from 'react-native'

import theme from '@/theme'

type Props = {
	author: string
}

const BookFooter = ({ author }: Props) => {
	return (
		<View
			style={{
				width: '100%',
				height: 20,
			}}
		>
			<p
				style={{
					fontSize: '1rem',
					color: theme.COLORS.TEXT_PRIMARY,
					textAlign: 'center',
				}}
			>
				{author}
			</p>
		</View>
	)
}

export default BookFooter
