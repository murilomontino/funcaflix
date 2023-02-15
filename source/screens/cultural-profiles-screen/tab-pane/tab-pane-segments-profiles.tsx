import React from 'react'
import ReactInfiniteScroll from 'react-infinite-scroll-component'

import { removeCharacterSpecialAndJoin } from '@/helpers/strings-normalize'
import { ICulturalProfile } from '@/types/setters'

import api from '@/services'

import CarouselSwipperProfiles from '../carousel-swipper-profiles'

import promiseErrorHandler from '@/utils/error-handler'
import { For } from '@/utils/tsx-controls'


type SegmentsProps = {
  segments: string[]
  active: boolean
}

const TabPaneSegmentsProfiles = ({ segments, active }: SegmentsProps) => {

  if (!active) return null

  const [data, setData] = React.useState<string[]>(segments.slice(0, 10))

  const fetchMoreData = () => {
    setTimeout(() => {
      setData(state => [...state, ...segments.slice(state.length, state.length + 10)])
    }, 200)
  }

  const hasMore = data.length < segments.length

  const fetchData = async (segment: string) => {
    const [err, response] = await promiseErrorHandler(api.get(`profiles/segment/${segment}`))

    if (err) return []

    return response.data?.data as ICulturalProfile[]
  }

  return (
    <React.Fragment>
      <ReactInfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Carregando...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Isso é tudo pessoal!</b>
          </p>
        }
      >
        <For items={data} >
          {(item, index) => {
            const id = removeCharacterSpecialAndJoin(item).slice(0, 3) + index

            return (
              <CarouselSwipperProfiles key={id} title={item} id={id} fetchData={fetchData} />
            )
          }}
        </For>
      </ReactInfiniteScroll>
    </React.Fragment>
  )
}

export default TabPaneSegmentsProfiles