import React from 'react'

import colors from '@/global/colors'

type Props = {
	text: string
}

const BookSinopse = ({ text }: Props) => {
	if (!text) return null

	return (
		<p
			style={{
				flexWrap: 'wrap',
				fontFamily: 'Helvética',
				textAlign: 'justify',
				fontSize: '1rem',
				color: colors.grey20,
				textIndent: '4rem',
				marginRight: '4rem',
			}}
		>
			{text || 'Sem Sinopse'}
		</p>
	)
}

export default BookSinopse
