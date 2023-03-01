import { useState } from 'react'
import { Animated } from 'react-native'

const useMoveBoxAnimation = () => {
	const [animation] = useState(new Animated.Value(0))
	const [opacity] = useState(new Animated.Value(0))

	const [display, setDisplay] = useState<'none' | 'flex'>('none')

	const upMove = () => {
		Animated.timing(animation, {
			toValue: -50,
			duration: 500,
			useNativeDriver: false,
		}).start()
		Animated.timing(opacity, {
			toValue: 0,
			duration: 500,
			useNativeDriver: false,
		}).start()
		setTimeout(() => {
			setDisplay('none')
		}, 500)
	}

	const downMove = () => {
		Animated.timing(animation, {
			toValue: 0,
			duration: 500,
			useNativeDriver: false,
		}).start()
		Animated.timing(opacity, {
			toValue: 1,
			duration: 500,
			useNativeDriver: false,
		}).start()
		setDisplay('flex')
	}

	return { animation, opacity, display, upMove, downMove }
}

export default useMoveBoxAnimation
