import promiseErrorHandler from '@/helpers/error-handler'
import { removeCharacterSpecialAndJoin } from '@/helpers/strings-normalize'
import api from '@/services'
import { ICulturalProfile } from '@/types/setters'
import { For } from '@/utils/tsx-controls'
import React from 'react'
import CarouselSwipperProfiles from '../carousel-swipper-profiles'

import ReactInfiniteScroll from 'react-infinite-scroll-component'

type CitiesProps = {
  items: string[]
  active: boolean
  route: 'city' | 'segment'
}

const TabPaneItemsProfiles = ({ items, active, route }: CitiesProps) => {

  if (!active) return null

  const [data, setData] = React.useState<string[]>(items.slice(0, 10))

  const fetchMoreData = () => {
    setTimeout(() => {
      setData(state => [...state, ...items.slice(state.length, state.length + 10)])
    }, 200)
  }

  const hasMore = data.length < items.length

  const fetchData = async (item: string) => {
    const [err, response] = await promiseErrorHandler(api.get(`profiles/${route}/${item}`))

    if (err) return []

    return response.data as ICulturalProfile[]
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
          {(item) => {
            return (
              <CarouselSwipperProfiles title={item} id={removeCharacterSpecialAndJoin(item)} fetchData={fetchData} />
            )
          }}
        </For>

      </ReactInfiniteScroll>


    </React.Fragment>
  )
}

export default TabPaneItemsProfiles