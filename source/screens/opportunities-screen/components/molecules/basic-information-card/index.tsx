import React from 'react'
import { View, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { GetterProjects } from '@/domain/entities'

import { viewStyles } from '../../styles'
import { Text, Title, ContainerTitle, ContainerInformation, ContainerDate } from './styles'

type Props = {
  item: GetterProjects
}

const BookBasicInformation = ({ item }: Props) => {
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
      <ContainerTitle>
        <Title>{item.nameProject}</Title>
      </ContainerTitle>
      <ContainerInformation>
        <ContainerDate>
          <Text>Data de Inicio:</Text>
          <Text>{item.dateStart}</Text>
        </ContainerDate>
        <ContainerDate>
          <Text>Data de Fim:</Text>
          <Text>{item.dateEnd}</Text>
        </ContainerDate>
      </ContainerInformation>
    </View>
  )
}

export default BookBasicInformation
