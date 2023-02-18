import React, { useState } from 'react'
import ReactInfiniteScroll from 'react-infinite-scroll-component'

import CarouselSwipper from '@/components/organism/slide-swipper'
import TrendingMainSlider from '@/components/organism/trending-main-slider'

import { If } from '@/utils/tsx-controls'

const ProgramsTVScreen = ({ newestItems, playlist }) => {
	const [hasMore, setHasMore] = useState(true)
	const [data, setData] = useState(playlist?.slice(0, 10))

	const fetchMoreData = () => {
		setData((state) => [
			...state,
			...playlist.slice(state.length, state.length + 10),
		])
		setHasMore(data.length < playlist?.length)
	}

	return (
		<>
			<If condition={newestItems?.length > 0}>
				<TrendingMainSlider items={newestItems} />
			</If>
			<If condition={data?.length > 0}>
				<ReactInfiniteScroll
					dataLength={data?.length}
					next={fetchMoreData}
					hasMore={hasMore}
					loader={<h4>Loading...</h4>}
					endMessage={
						<p style={{ textAlign: 'center' }}>
							<b>Isso é tudo Pessoal!</b>
						</p>
					}
				>
					{data?.map((item) => (
						<CarouselSwipper
							link={`video/${item.id}`}
							queryString={`?videoId=`}
							height="200px"
							key={item.id}
							items={item.items}
							title={item.title}
							id={item.playlistId}
						/>
					))}
				</ReactInfiniteScroll>
			</If>
		</>
	)
}

export default ProgramsTVScreen
