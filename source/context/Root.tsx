import React from 'react'

import DrawerProvider from './DrawerMenu'
import LoadingContextProvider from './LoadingModal'

type Props = {
	children: React.ReactNode
}

const RootContext = ({ children }: Props) => {
	return (
		<LoadingContextProvider>
			<DrawerProvider>{children}</DrawerProvider>
		</LoadingContextProvider>
	)
}

export default RootContext
