import React from 'react'
import { View } from 'react-native'

import InputTopic from '@/components/molecule/input-topic'

import { useFormVideoUrl } from '@/forms/Product/product-video/hooks'

const CardInsertURL = () => {
  const { onChangeUrl, url } = useFormVideoUrl()
  return (
    <View
      style={{
        width: '100%',
      }}
    >
      <InputTopic topic="URL" onChangeText={onChangeUrl} value={url} />
    </View>
  )
}

export default CardInsertURL
