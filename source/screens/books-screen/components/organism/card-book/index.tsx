import React from 'react'
import { View } from 'react-native'

import Img from '@/components/atom/image'

import BookBasicInformation from '../../molecules/book-basic-information'
import BookFooter from '../../molecules/book-footer'
import BookSinopse from '../../molecules/book-sinopse'
import { viewStyles } from '../../styles'
import { Card } from './styles'

import { useSize } from '@/hooks/utils/use-size'

type Props = {
  item: {
    id: number
    title: string
    about: string
    thumbnail: string
  }
}

const CardBooks = ({ item }: Props) => {
  const { size } = useSize()

  return (
    <Card>
      <View
        style={
          (viewStyles.viewContainerImage,
          size.width < 640 && {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          })
        }
      >
        <Img image={item.thumbnail} width={250} height={'100%'} />
      </View>
      <View style={[viewStyles.viewDetails]}>
        <BookBasicInformation item={item} />
        <BookSinopse item={item} />
        <BookFooter item={item} />
      </View>
    </Card>
  )
}

export default CardBooks
