import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

import image from '@/public/images/banner-perfis-culturais-2.jpg'
import { View } from 'moti'

import BreadCrumb from '@/components/organism/breadcrumb'

import colors from '@/global/colors'
import constants from '@/global/constants'
import { useResources } from '@/hooks/utils/use-resources'

import ReactInfiniteScroll from 'react-infinite-scroll-component'
import { IGetterCulturalProfile } from '@/types/getters'
import { For } from '@/utils/tsx-controls'

import {
  Col,
  Container,
  Row,
} from 'reactstrap'

import CardArtists from '@/components/molecule/card-artists'
import Loading from '@/components/atom/loading'

type Props = {
  profiles: IGetterCulturalProfile[]
  name: string
}

const CulturalProfilesNameScreen = ({ profiles, name }: Props) => {

  const { isFontReady } = useResources()

  const [data, setData] = React.useState<IGetterCulturalProfile[]>(profiles.slice(0, 10))
  const hasMore = data.length < profiles.length

  const fetchMoreData = () => {
    setTimeout(() => {
      setData(state => [...state, ...profiles.slice(state.length, state.length + 10)])
    }, 200)
  }

  if (!isFontReady) return <Loading />


  return (
    <React.Fragment>
      <BreadCrumb title={name} image={image} />


      <div className="page-content mt-2 w-90 p-5">
        <ReactInfiniteScroll
          dataLength={data.length}
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
            <For items={data} >
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