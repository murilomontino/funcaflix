import React, { useEffect, useState } from 'react'
import ReactInfiniteScroll from 'react-infinite-scroll-component'
import { ActivityIndicator, StyleSheet } from 'react-native'

import { CulturalProfileByCity, CulturalProfileBySegment } from '@/domain/repositories'
import image from '@/public/images/banner-perfis-culturais-2.jpg'
import { View } from 'moti'

import BreadCrumb from '@/components/organism/breadcrumb'

import colors from '@/global/colors'
import constants from '@/global/constants'
import { useResources } from '@/hooks/utils/use-resources'

import CarouselSwipper from './slide-swipper-cultural-profile'

type Props = {
  profiles: CulturalProfileByCity[] | CulturalProfileBySegment[]
  itemsPerView?: number
}

const CulturalProfilesScreen = ({ profiles = [], itemsPerView = 5.5,
}: Props) => {
  const [loading, setLoading] = useState(true)

  const { isFontReady } = useResources()

  const [data, setData] = useState(profiles.slice(0, 50))

  const fetchMoreData = () => {
    setData((state) => [...state, ...profiles.slice(state.length, state.length + 50)] as any)
  }

  useEffect(() => {
    if (data) {
      setLoading(false)
    }
  }, [data])

  const hasMore = data.length < profiles.length

  if (loading || !isFontReady) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.white} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <BreadCrumb title="Perfis Culturais" image={image} />

      {data.slice(0, 3).map((item, index) => {
  
        const id = (item.city || item.segment)

        return (

          <CarouselSwipper
            key={index}
            title={id}
            id={id.split(' ').join('-').toLowerCase()}
            items={item.items}
          />
        )
      })}

    </View>
  )
}

export default CulturalProfilesScreen

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
