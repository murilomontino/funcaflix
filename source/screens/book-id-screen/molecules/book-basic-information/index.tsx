import React from 'react'
import { View } from 'react-native'

import { Text } from './styles'

type Props = {
  title: string
  subTitle?: string
}

const BookBasicInformation = ({ title, subTitle }: Props) => {
  return (
    <View style={[{ padding: 8 }]}>
      <View
        style={[
          { flexDirection: 'row', padding: 4 },
          {
            alignItems: 'center',
          },
        ]}
      >
        <Text style={[{ fontWeight: '700' }]}>{title}</Text>
        {subTitle && (
          <Text style={[{ fontWeight: '700' }]}>
            {'-'} {subTitle}
          </Text>
        )}
      </View>
      {/*       <View
        style={[
          viewStyles.viewAttributes,
          {
            alignItems: 'center',
          },
        ]}
      >
        <Text style={[textStyles.attrText, { fontWeight: 'bold', textAlignVertical: 'center' }]}>
          Genero:{' '}
        </Text>
        <GenerosLiterarios generos={item.generos} />
      </View> */}
    </View>
  )
}

export default BookBasicInformation
