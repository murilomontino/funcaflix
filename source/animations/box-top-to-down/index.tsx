import React, { useEffect } from 'react'
import { ViewProps, ViewStyle, ScrollView, ScrollViewProps } from 'react-native'

import useMoveBoxAnimation from '@/animations/box-top-to-down/use-move-down-box'

import { Container } from './styles'

type Props = {
	isOpen: boolean
	scrollView?: boolean
	onChangeOpen?: (isOpen: boolean) => void
	children: React.ReactNode
	containerStyle?: ViewStyle | ViewStyle[]
	scrollViewProps?: ScrollViewProps
} & ViewProps

const BoxToDown = ({
	children,
	isOpen,
	containerStyle,
	scrollView = false,
	scrollViewProps,
	...rest
}: Props) => {
	const { animation, display, downMove, opacity, upMove } =
		useMoveBoxAnimation()

	useEffect(() => {
		if (isOpen) {
			downMove()
		} else {
			upMove()
		}
	}, [isOpen])

	const renderChildren = () => {
		if (scrollView) {
			return <ScrollView {...scrollViewProps}>{children}</ScrollView>
		}

		return children
	}

	return (
		<Container
			{...rest}
			style={[
				{
					display: display,
					opacity,
					transform: [
						{
							//scaleY: openAnimation,
							translateY: animation,
						},
					],
				},
				containerStyle,
			]}
		>
			{renderChildren()}
		</Container>
	)
}

export default BoxToDown
