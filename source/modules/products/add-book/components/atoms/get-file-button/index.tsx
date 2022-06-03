import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import * as DocumentPicker from 'expo-document-picker'

import { styles } from './styles'

type Props = {
  value: File
  onChangeValue: (value: File) => void
  requered?: boolean
  message?: string
}

export const GetFileButton = ({
  requered = true,
  message = 'Selecione um arquivo',
  value,
  onChangeValue,
}: Props) => {
  // Busca um arquivo no formato PDF
  const [file, setFile] = useState<File>(value)

  const onChangeFile = async () => {
    const obj = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
      copyToCacheDirectory: true,
    })

    if (obj && obj.type === 'success') {
      onChangeValue(obj.file)
      setFile(obj.file)
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
          {file?.name || message.toUpperCase()}
        </Text>
        {requered && <Text style={styles.topicRequered}>*</Text>}
      </View>
    </TouchableOpacity>
  )
}

export default GetFileButton
