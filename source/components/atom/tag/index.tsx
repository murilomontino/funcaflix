import React from 'react'
import { Text } from 'react-native'

import { Container } from './styles'

type Props = {
  tag: string
  onChangeRemoveTags: (index: number) => void
  index: number
}

const Tag = ({ onChangeRemoveTags, tag, index }: Props) => {
  return (
    <Container>
      <Text>{tag}</Text>
      <Text
        onPress={() => onChangeRemoveTags(index)}
        style={{
          color: '#f00',
          fontSize: 12,
          padding: 4,
          marginLeft: 4,
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        X
      </Text>
    </Container>
  )
}

export default Tag
