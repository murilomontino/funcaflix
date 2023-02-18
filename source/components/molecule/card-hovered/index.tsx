import React from 'react'

import { Container } from './styles'

type Props = {
	index: number
	width: number
	children?: JSX.Element
}

const CardHovered = ({ index, width, children }: Props) => {
	return (
		<Container
			from={{ top: -25, scaleY: 0.9, scaleX: 0.75 }}
			animate={{ top: -100, scaleY: 1, scaleX: 1 }}
			entering={{ x: 0 }}
			transition={{
				type: 'timing',
				delay: 50,
				duration: 100,
			}}
			style={{
				left: index * width - 50 + index * 2.5,
				elevation: 5,
				shadowOffset: { width: 2, height: 2 },
				shadowColor: '#000',
				shadowOpacity: 0.3,
			}}
		>
			{children}
		</Container>
	)
}

export default CardHovered
