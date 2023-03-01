import React from 'react'

import useFetchUsernameProfile from '@/api/fetch-username'
import { useRouter } from 'next/router'

import ScreenProfile from '@/screens/profile-screen'

const ErrorComponent = () => (
	<div
		style={{
			height: '80vh',
			width: '100vw',
		}}
		className="d-flex justify-content-center align-items-center"
	>
		<p>Este usuário não completou seu cadastro para visualização!</p>
	</div>
)

const LoadingComponent = () => {
	return (
		<React.Fragment>
			<div
				style={{
					height: '80vh',
					width: '100vw',
				}}
				className="d-flex justify-content-center align-items-center"
			>
				<p>Carregando...</p>
			</div>
		</React.Fragment>
	)
}

const ProfilePage = () => {
	const {
		query: { username },
	} = useRouter()
	const names = (username as string)?.split('@')
	const id = names?.[names?.length - 1] || null

	const { data, error, isLoading } = useFetchUsernameProfile(id)

	if (error) return <ErrorComponent />

	if (isLoading || !data) return <LoadingComponent />

	return (
		<ScreenProfile
			profile={data?.profile}
			audiovisuals={data?.audiovisual}
			musics={data?.musics}
			literature={data?.literature}
			workshops={data?.workshops}
			username={username as string}
			events={data?.events}
		/>
	)
}

export default ProfilePage
