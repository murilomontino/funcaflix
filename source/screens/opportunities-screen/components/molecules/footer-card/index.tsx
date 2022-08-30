import React from 'react'
import { View, Text, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { GetterProjects } from '@/domain/entities'

import { textStyles, viewStyles } from '../../styles'

type Props = {
  item: GetterProjects
}

const BookFooter = ({ item }: Props) => {
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  /*  const redirectBookID = () => {
    changeBook(item.pdf)
  } */

  return (
    <View
      style={[
        viewStyles.viewFooter,
        {
          flexDirection: size.width < 1127 ? 'column' : 'row',
          justifyContent: size.width < 1127 ? 'center' : 'space-between',
          alignItems: size.width < 1127 ? 'center' : 'flex-start',
        },
      ]}
    >
      <View>
        <Text style={textStyles.authorFooter}>{item.company}</Text>
      </View>
      {/* <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Tags tags={item.tags} />
      </View>  */}

      {/* <View style={[viewStyles.viewButtons]}>
        <TouchableOpacity style={[viewStyles.viewButton]}>
          <Link href={`/oportunidades/${item.id}`}>
            <Text style={[textStyles.buttonText]}>Ver mais</Text>
          </Link>
        </TouchableOpacity>
      </View> */}
    </View>
  )
}

export default BookFooter
