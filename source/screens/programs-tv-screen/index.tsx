import React, { useState } from 'react'
import ReactInfiniteScroll from 'react-infinite-scroll-component'

import CarouselSwipper from '@/components/organism/slide-swipper'
import TrendingMainSlider from '@/components/organism/trending-main-slider'

const ProgramsTVScreen = ({ newestItems, playlist }) => {
  const [hasMore, setHasMore] = useState(true)
  const [data, setData] = useState(playlist.slice(0, 10))

  const fetchMoreData = () => {
    setData((state) => [...state, ...playlist.slice(state.length, state.length + 10)])
    setHasMore(data.length < playlist.length)
  }

  return (
    <>
      <TrendingMainSlider items={newestItems} />
      <ReactInfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {data.map((item) => (
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
    </>
  )
}

export default ProgramsTVScreen
