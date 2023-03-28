import { useState } from 'react'

export const useResources = () => {
	const [isFontReady, setIsFontReady] = useState(true)

	return {
		isFontReady,
	}
}
