import React, { useCallback, useDeferredValue, useEffect, useState } from 'react'
import ReactInfiniteScroll from 'react-infinite-scroll-component'
import {
  Col,
} from 'reactstrap'

import image from '@/public/images/banner-perfis-culturais-2.jpg'
import { IGetterCulturalProfile } from '@/types/getters'

import Loading from '@/components/atom/loading'
import CardArtists from '@/components/molecule/card-artists'
import InputTopic from '@/components/molecule/input-topic'
import BreadCrumb from '@/components/organism/breadcrumb'

import { useResources } from '@/hooks/utils/use-resources'


import { For } from '@/utils/tsx-controls'



type Props = {
  profiles: IGetterCulturalProfile[]
  name: string
}
/**
 *  profiles
 *  data Partial -> any[]
 *  profiles search
 *  search partial -> any[]
 */

const CulturalProfilesNameScreen = ({ profiles, name }: Props) => {

  const { isFontReady } = useResources()

  const [data, setData] = useState<IGetterCulturalProfile[]>(profiles.slice(0, 10))

  const deferredData = useDeferredValue(data)

  const [dataTotalSearch, setDataTotalSearch] = useState<IGetterCulturalProfile[]>([])
  const [dataSearch, setDataSearch] = useState<IGetterCulturalProfile[]>([])

  const [search, setSearch] = useState('')
  const isSearch = search.trim() !== ''

  const deferredDataSearch = useDeferredValue(dataSearch)

  const hasMoreNotSearch = deferredData.length < profiles.length && !isSearch
  const hasMoreSearch = deferredDataSearch.length < dataTotalSearch.length && isSearch
  const hasMore = isSearch ? hasMoreSearch : hasMoreNotSearch

  useEffect(() => {
    if (!isSearch) {
      setData(profiles.slice(0, 10))
      setDataTotalSearch([])
    }

    fetchSearch(search)

    return () => {
      setData(profiles.slice(0, 10))
      setDataTotalSearch([])
    }
  }, [search])

  const fetchMoreData = () => {
    setTimeout(() => {
      setData(state => [...state, ...profiles.slice(state.length, state.length + 10)])
    }, 200)
  }

  const fetchSearch = useCallback(async (search: string) => {
    if (!isSearch) {
      setData(profiles.slice(0, 10))
      setDataTotalSearch([])
      return
    }

    const data = profiles.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

    setDataTotalSearch(data)
    setDataSearch(data.slice(0, 10))
  }, [isSearch])

  const onChangeSearch = (search: string) => {
    setSearch(search)
  }

  const handleSearch = async () => {
    await fetchSearch(search)
  }

  if (!isFontReady) return <Loading />

  return (
    <React.Fragment>
      <BreadCrumb title={name} image={image} />

      <div className="d-flex w-100 justify-content-center align-content-center">
        <InputTopic
          onChangeText={onChangeSearch}
          value={search}
          nameIcon="search"
          placeholder='Buscar Artista'
          onClickIcon={handleSearch}
        />
      </div>

      <div className="page-content mt-2 w-90 p-5">
        <ReactInfiniteScroll
          dataLength={isSearch ? deferredDataSearch.length : deferredData.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Carregando...</h4>}
          endMessage={
            <p className="text-center text-capitalize m-2">
              <b>Isso é tudo pessoal!</b>
            </p>
          }
        >
          <div className="d-flex align-items-center overflow-hidden flex-wrap">
            <For items={
              isSearch ? deferredDataSearch : deferredData
            } >
              {(item) => {
                return (
                  <Col key={item.id} xs="12" sm="6" md="4" lg="3" xl="3">
                    <CardArtists key={item.id} item={item} />
                  </Col>
                )
              }}
            </For>
          </div>
        </ReactInfiniteScroll>
      </div>

    </React.Fragment>
  )
}

export default CulturalProfilesNameScreen