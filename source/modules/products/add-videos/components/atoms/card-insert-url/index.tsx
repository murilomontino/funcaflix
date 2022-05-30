import React from 'react'
import { Text, View } from 'react-native'

import InputTopic from '@/components/molecule/input-topic'

type Props = {
  url: string
  onChangeUrl: (value: string) => void
  error: string
}

const CardInsertURL = ({ onChangeUrl, url, error }: Props) => {
  const onChange = (value: string) => {
    onChangeUrl(value)
  }

  return (
    <View
      nativeID="url"
      style={{
        width: '100%',
      }}
    >
      <InputTopic topic="URL" onChangeText={onChange} value={url} />
      <Text>{error}</Text>
    </View>
  )
}

export default CardInsertURL
