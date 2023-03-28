import { useEffect, useMemo, useState } from 'react'

import theme from '@/theme'

export const useSize = () => {
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)

	useEffect(() => {
		if (window) {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
		}
	}, [])

	const SCREEN_SMALLER_THAN_LARGE_SIZE = useMemo(
		() => width < theme.CONSTANTS.SCREEN.LARGE,
		[width]
	)

	const size = useMemo(
		() => ({
			width,
			height,
		}),
		[width, height]
	)

	const SCREEN_SMALLER_THAN_MEDIUM_SIZE = useMemo(
		() => width < theme.CONSTANTS.SCREEN.MEDIUM,
		[width]
	)

	return {
		size,
		web: true,
		SCREEN_SMALLER_THAN_LARGE_SIZE,
		SCREEN_SMALLER_THAN_MEDIUM_SIZE,
	}
}
