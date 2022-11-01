import React, { useEffect, useState } from 'react'
import ReactInfiniteScroll from 'react-infinite-scroll-component'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

import image from '@/public/images/literatura.jpg'

import BreadCrumb from '@/components/organism/breadcrumb'

import CardBooks from './components/organism/card-book'

import colors from '@/global/colors'
import constants from '@/global/constants'
import { useResources } from '@/hooks/utils/use-resources'
import type { IGetterBooks } from '@/types/getters'

type Props = {
  books: IGetterBooks[]
}

const ScreenBooks = ({ books }: Props) => {
  const [loading, setLoading] = useState(true)

  const { isFontReady } = useResources()

  const [data, setData] = useState(books.slice(0, 50))

  const fetchMoreData = () => {
    setData((state) => [...state, ...books.slice(state.length, state.length + 50)])
  }

  useEffect(() => {
    if (data) {
      setLoading(false)
    }
  }, [data])

  const hasMore = data.length < books.length

  if (loading || !isFontReady) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.white} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <BreadCrumb title="Literatura" image={image} />

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
        <div className="overflow-hidden">
          {data.map((item, index) => (
            <CardBooks item={item} key={index} />
          ))}
        </div>
      </ReactInfiniteScroll>
    </View>
  )
}

export default ScreenBooks

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
