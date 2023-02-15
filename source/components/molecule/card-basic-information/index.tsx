import React from 'react'
import { View, Text, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { textStyles, viewStyles } from '../../../screens/books-screen/components/styles'

import { If } from '@/utils/tsx-controls'

type Props = {
  title: string
  author?: string
  subTitle?: string
  children?: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[]
}

const BookBasicInformation = ({ title, author, subTitle, children }: Props) => {

  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  return (
    <View
      style={[
        viewStyles.viewHeader,
        size.width < 1127 && {
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
    >
      <View
        style={[
          viewStyles.viewAttributes,
          {
            alignItems: 'center',
          },
        ]}
      >
        <Text style={[textStyles.attrText, { fontWeight: '700', fontSize: 12 }]}>{title}</Text>
        <If condition={!!subTitle}>
          <Text style={[textStyles.attrText, { fontWeight: '700', fontSize: 12 }]}>
           {"-"} {subTitle}
          </Text>
        </If>

      </View>
      <If condition={!!author}>
        <View>
          <Text style={textStyles.authorFooter}>{author}</Text>
        </View>
      </If>
      {children}
    </View>
  )
}

export default BookBasicInformation
