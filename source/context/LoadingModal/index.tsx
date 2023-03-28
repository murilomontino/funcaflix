import React, { createContext, useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner'

type Context = {
	loading: boolean
	showLoading: () => void
	hideLoading: () => void
}

const LoadingContext = createContext<Context>({} as Context)

type Props = {
	children: React.ReactNode
}

const LoadingContextProvider = ({ children }: Props) => {
	const [loading, setLoading] = useState(false)

	const showLoading = () => setLoading(true)
	const hideLoading = () => setLoading(false)

	const LoadingModal = () => {
		return (
			<Modal visible={loading} transparent>
				<div className="d-flex justify-content-center align-items-center">
					<Spinner color={'blue'} size={'large'} />
				</div>
			</Modal>
		)
	}
	return (
		<LoadingContext.Provider
			value={{
				loading,
				showLoading,
				hideLoading,
			}}
		>
			{children}
			<LoadingModal />
		</LoadingContext.Provider>
	)
}

export default LoadingContextProvider

export const useLoading = (): Context => {
	return useContext(LoadingContext)
}
