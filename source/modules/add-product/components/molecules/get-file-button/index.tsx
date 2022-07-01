import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import * as DocumentPicker from 'expo-document-picker'

import { styles } from './styles'

type mimetype = 'image/jpeg' | 'image/jpg' | 'image/png' | 'application/pdf' | 'audio/*' | 'video/*'

type Props = {
  value?: FileList
  type: mimetype[]
  onChangeValue: (value: FileList) => void
  requered?: boolean
  message?: string
}

export const GetFileButton = ({
  requered = true,
  message = 'Selecione um arquivo',
  type,
  onChangeValue,
}: Props) => {
  const onChangeFile = async () => {
    const obj = await DocumentPicker.getDocumentAsync({
      type,
      copyToCacheDirectory: true,
      multiple: true,
    })

    if (obj && obj.type === 'success') {
      onChangeValue(obj.output)
    }
  }

  return (
    <TouchableOpacity style={[styles.buttonContainer]} onPress={onChangeFile}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 14,
            fontWeight: '500',
            textAlign: 'center',
          }}
        >
          {message.toUpperCase()}
        </Text>
        {requered && <Text style={styles.topicRequered}>*</Text>}
      </View>
    </TouchableOpacity>
  )
}

export default GetFileButton
