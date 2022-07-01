import React from 'react'
import { View, Text } from 'react-native'

import { textStyles, viewStyles } from '../../styles'

type Props = {
  item: {
    id: number
    title: string
    about: string
    thumbnail: string
  }
}

const BookSinopse = ({ item }: Props) => {
  return (
    <View style={viewStyles.viewSinopse}>
      <Text
        style={[textStyles.sinopse]}
        numberOfLines={6}
        adjustsFontSizeToFit={true}
        ellipsizeMode="tail"
      >
        {(item.about && '      '.concat(item.about.replace('\n', '\n      '))) || 'Sem Sinopse'}
      </Text>
    </View>
  )
}

export default BookSinopse
