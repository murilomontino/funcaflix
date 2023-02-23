import React from 'react'

import theme from '@/theme'
import { MotiView } from 'moti'

import { Paragrafo } from './styles'

type Props = {
	description: string
	animated: boolean
}

const DescriptionMovie = ({ description, animated }: Props) => {
	return (
		<MotiView
			animate={{
				opacity: animated ? 1 : 0,
			}}
			style={{
				flex: 1,
				flexWrap: 'wrap',
			}}
			transition={{
				type: 'timing',
				delay: theme.EFFECT.DELAY,
				duration: theme.EFFECT.DURATION + 100,
			}}
		>
			<Paragrafo>
				{description?.slice(0, 300).replaceAll('\n', '').concat('...')}
			</Paragrafo>
		</MotiView>
	)
}

export default DescriptionMovie
