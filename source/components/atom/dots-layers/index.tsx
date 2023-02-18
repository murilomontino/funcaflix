import React, { useEffect } from 'react'

import { Dots, Container } from './styles'

type Props = {
	current: number
	maxLayers: number
	visible?: boolean
}

const DotsLayers = ({ current, maxLayers, visible = true }: Props) => {
	const [dots, setDots] = React.useState<number[]>([])

	useEffect(() => {
		const dots = []
		for (let i = 0; i < maxLayers; i++) {
			dots.push(i)
		}
		setDots(dots)
	}, [maxLayers])

	const memoBackgroundColor = (item) => {
		if (visible) {
			return current === item ? '#e8e8e8' : '#9c9c9c'
		}
		return 'transparent'
	}

	return (
		<Container>
			{dots.map((item, index) => (
				<Dots
					style={{
						backgroundColor: memoBackgroundColor(item),
					}}
					key={index}
				/>
			))}
		</Container>
	)
}

export default DotsLayers
