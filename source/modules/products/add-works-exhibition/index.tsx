import React, { useState } from 'react'
import { View, FlatList, Text } from 'react-native'

import { GettersExhibitions } from '@/types'

import CardExhibition from './molecule/card-exhibition'
import WorkPanel from './template/work-panel'

import { useSize } from '@/hooks/utils/use-size'

type Props = {
  exhibitions: GettersExhibitions[]
}

const WIDTH_CARD = 400

const Main = ({ exhibitions }: Props) => {
  const { size } = useSize()

  const [selected, setSelected] = useState<GettersExhibitions>(null)

  const handleSelect = (exhibition: GettersExhibitions) => {
    setSelected(exhibition)
  }

  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <FlatList
        data={exhibitions}
        style={{
          flex: 1,
          maxHeight: size.height,
          width: '80vw',
          backgroundColor: 'rgba(0,0,0,0.2)',
        }}
        horizontal
        ListEmptyComponent={() => (
          <View>
            <Text>Nenhuma exposição cadastrada</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <CardExhibition
            item={item}
            horizontal
            onPress={() => handleSelect(item)}
            ContainerStyle={{
              width: WIDTH_CARD,
            }}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      {selected && <WorkPanel item={selected} />}
    </View>
  )
}

export default Main
