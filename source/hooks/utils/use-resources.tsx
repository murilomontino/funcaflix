import { useEffect, useState } from 'react'

import * as Font from 'expo-font'

import Inter900Black from '@/assets/fonts/Inter,Rubik_Beastly/Inter/static/Inter-Black.ttf'
import InterBold from '@/assets/fonts/Inter,Rubik_Beastly/Inter/static/Inter-Bold.ttf'
import InterSemiBold from '@/assets/fonts/Inter,Rubik_Beastly/Inter/static/Inter-SemiBold.ttf'

export const useResources = () => {
	const [isFontReady, setIsFontReady] = useState(false)

	const loadFontAsync = async () => {
		try {
			await Font.loadAsync({
				Inter900Black: {
					uri: Inter900Black as any,
					display: Font.FontDisplay.SWAP,
				},
				InterSemiBold: {
					uri: InterSemiBold as any,
					display: Font.FontDisplay.SWAP,
				},
				InterBold: {
					uri: InterBold as any,
					display: Font.FontDisplay.SWAP,
				},
			})
		} catch (error) {
			console.log('Font Load Error:', error)
		} finally {
			setIsFontReady(true)
		}
	}

	useEffect(() => {
		loadFontAsync()
	}, [])

	return {
		isFontReady,
	}
}
