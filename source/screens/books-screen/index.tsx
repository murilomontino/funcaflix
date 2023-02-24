import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import ReactInfiniteScroll from 'react-infinite-scroll-component'

import image from '@/public/images/literatura.jpg'
import type { IGetterBooks } from '@/types/getters'

import BreadCrumb from '@/components/organism/breadcrumb'

import CardBooks from './components/organism/card-book'

import { useResources } from '@/hooks/utils/use-resources'

type Props = {
	books: IGetterBooks[]
}

const ScreenBooks = ({ books }: Props) => {
	const [loading, setLoading] = useState(true)

	const { isFontReady } = useResources()

	const [data, setData] = useState(books.slice(0, 50))

	const fetchMoreData = () => {
		setData((state) => [
			...state,
			...books.slice(state.length, state.length + 50),
		])
	}

	useEffect(() => {
		if (data) {
			setLoading(false)
		}
	}, [data])

	const hasMore = data.length < books.length

	if (loading || !isFontReady) {
		return (
			<React.Fragment>
				<div className="overflow-hidden">
					<div className="d-flex justify-content-center">
						<Spinner animation="border" variant="primary" />
					</div>
				</div>
			</React.Fragment>
		)
	}

	return (
		<div>
			<BreadCrumb title="Literatura" image={image} />

			<ReactInfiniteScroll
				dataLength={data.length}
				next={fetchMoreData}
				hasMore={hasMore}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Isso é tudo, Pessoal!</b>
					</p>
				}
			>
				<div className="overflow-hidden justify-content-center align-items-center">
					{data.map((item, index) => (
						<CardBooks item={item} key={index} />
					))}
				</div>
			</ReactInfiniteScroll>
		</div>
	)
}

export default ScreenBooks
