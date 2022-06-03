import React, { useEffect, useMemo, useState } from 'react'
import { Image, ImageStyle, StyleProp } from 'react-native'

import * as DocumentPicker from 'expo-document-picker'

import Button from '../button'
import { Container, ImageButton } from './styles'

type Props = {
  value: File
  onChangeValue: (value: File) => void
  width?: number
  height?: number
  placeholder?: string
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'
}

const GetImageButton = ({
  value,
  onChangeValue,
  width = 150,
  height = 200,
  resizeMode = 'cover',
  placeholder = 'Escolher uma Capa',
}: Props) => {
  const [imageState, setImageState] = useState<File>(value)

  useEffect(() => {
    setImageState(value)
  }, [value])

  useEffect(() => {
    return () => {
      setImageState(null)
    }
  }, [])

  const onPress = async () => {
    const img = await DocumentPicker.getDocumentAsync({
      type: ['image/png', 'image/jpeg', 'image/jpg'],
    })

    if (img.type && img.type === 'success') {
      setImageState(img.file)
      onChangeValue(img.file)
    }
  }

  const imageStyle: StyleProp<ImageStyle> = {
    width: width,
    height: height,
    resizeMode: resizeMode,
  }

  const fileMemo = useMemo(
    () => (imageState ? URL.createObjectURL(imageState) : null),
    [imageState]
  )

  return (
    <Container>
      <ImageButton
        style={{
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 1,
            height: 2,
          },
          shadowOpacity: 1,
          shadowRadius: 4,
        }}
        onPress={onPress}
      >
        <Image
          style={imageStyle}
          defaultSource={require('@/assets/not-image.png')}
          source={{
            uri: fileMemo || '',
          }}
        />
      </ImageButton>
      <Button
        style={{
          minHeight: 50,
          minWidth: 200,
        }}
        text={imageState?.type === 'success' ? imageState?.name : placeholder}
        onPress={onPress}
      />
    </Container>
  )
}

export default GetImageButton
