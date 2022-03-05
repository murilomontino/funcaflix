import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'

import Button from '@/components/atom/button'

import Artist from './components/organism/artist'
import Exhibition from './components/organism/exhibition'
import PhotosOfEvent from './components/organism/photos-of-event'
import SendExhibition from './components/organism/send-exhibition'
import { Container, ContainerButton } from './styles'

import { useSize } from '@/hooks/use-size'

const Main = () => {
  const { size } = useSize()

  const [selected, setSelected] = useState(0)

  const [loading, setLoading] = useState(true)

  const ref = useRef<FlatList>(null)

  const scrollToIndex = (index: number) => {
    ref.current.scrollToOffset({
      offset: size.width * index,
      animated: true,
    })
    setSelected(index)
  }

  const data = [
    <Exhibition key={1} />,
    <Artist key={2} />,
    <PhotosOfEvent key={3} />,
    <SendExhibition key={4} />,
  ]

  useEffect(() => {
    if (data.length > 0) {
      setLoading(false)
    }
  }, [data])

  const BottomsMap = [
    {
      label: 'Exposição',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
    {
      label: 'Artista',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
    {
      label: 'Fotos do Evento',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
    {
      label: 'Enviar Exposição',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
  ]

  return (
    <Container>
      <ContainerButton>
        {BottomsMap.map((item, index) => (
          <Button
            key={index}
            text={item.label}
            onPress={() => item.onPress(index)}
            selectable
            selected={selected === index}
          />
        ))}
      </ContainerButton>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          ref={ref}
          initialScrollIndex={selected}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          onScroll={(e) => {
            const index = Math.round(e.nativeEvent.contentOffset.x / size.width)
            setSelected(index)
          }}
          horizontal
          scrollEnabled={false}
          disableScrollViewPanResponder
          showsHorizontalScrollIndicator={false}
          decelerationRate="normal"
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                zIndex: 99,
                padding: 12,
                width: size.width,
              }}
            >
              {item}
            </View>
          )}
        />
      )}
    </Container>
  )
}

export default Main
