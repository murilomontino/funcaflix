import React, { useEffect, useState } from 'react'
import ReactInfiniteScroll from 'react-infinite-scroll-component'
import { ActivityIndicator, StyleSheet } from 'react-native'

import { GetterProjects } from '@/index'
import image from '@/public/images/oportunidades.jpeg'
import { View } from 'moti'

import BreadCrumb from '@/components/organism/breadcrumb'

import CardOpportunities from './components/organism/card-opportunities'

import colors from '@/global/colors'
import constants from '@/global/constants'
import { useResources } from '@/hooks/utils/use-resources'

type Props = {
  opportunities: GetterProjects[]
}

const OpportunitiesScreen = ({ opportunities = [] }: Props) => {
  const [loading, setLoading] = useState(true)

  const { isFontReady } = useResources()

  const [hasMore, setHasMore] = useState(true)
  const [data, setData] = useState(
    opportunities.slice(0, 50)
      .sort((a) => {
        return a.status === 1 ? -1 : 1
      })
  )

  const fetchMoreData = () => {
    setData((state) =>
      [...state, ...opportunities.slice(state.length, state.length + 50)]
        .sort((a) => {
          return a.status === 1 ? -1 : 1
        })
    )
    setHasMore(data.length < opportunities.length)
  }

  useEffect(() => {
    if (data) {
      setLoading(false)
    }
  }, [data])

  if (loading || !isFontReady) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.white} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <BreadCrumb title="Oportunidades" image={image} />

      <ReactInfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Opa! Isso é tudo, pessoal!</b>
          </p>
        }
      >
        <div className="overflow-hidden">
          {data.map((item, index) => (
            <CardOpportunities key={index} item={item} />
          ))}
        </div>
      </ReactInfiniteScroll>
    </View>
  )
}

export default OpportunitiesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: constants.footerHight,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})
