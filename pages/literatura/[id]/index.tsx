import React from 'react'

import { useFetchBookByIDAsync } from '@/api/fetch-book'
import { useRouter } from 'next/router'

import Loading from '@/components/atom/loading'
import ScreenBookID from '@/screens/book-id-screen'

const LiteraturaId = () => {
	const {
		query: { id },
	} = useRouter()

	const { data, error, isLoading } = useFetchBookByIDAsync(id)

	if (isLoading || error || !data) {
		return <Loading />
	}

	return (
		<React.Fragment>
			<ScreenBookID book={data} />
		</React.Fragment>
	)
}

export default LiteraturaId
