import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import theme from '@/theme'
import Link from 'next/link'

import Button from '@/components/atom/button'
import InputFileHTML from '@/components/atom/input-file-html'

import api from '@/services'

import { useResources } from '@/hooks/utils/use-resources'

const Lab = () => {
  const { isFontReady } = useResources()

  const [image, setImage] = useState<File>(null)
  const [progress, setProgress] = useState<number>(0)
  const [URL, setURL] = useState<string>(null)

  useEffect(() => {
    const verify = async () => {
      const {
        // eslint-disable-next-line no-empty-pattern
        data: { data },
      } = await api.get('verify-oauth')
      const { url } = data
      console.log(url)

      setURL(url)
    }
    verify()
  }, [])

  if (!isFontReady) {
    return null
  }

  const onChangeImage = (image: React.ChangeEvent<HTMLInputElement>) => {
    setImage(image.target.files[0])
    setProgress(0)
  }

  const onSubmit = async () => {
    try {
      const formData = new FormData()
      formData.append('file', image, image.name)

      await api.post('/videos', formData, {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent
          const percent = Math.floor((loaded / total) * 100)
          setProgress(percent)
        },
        headers: {
          'content-type': 'multipart/form-data; boundary=WebKitFormBoundary9n00RyX5AIcRgRpg',
        },
        params: {
          name: image.name,
          ext: image.type,
          size: image.size,
        },
      })
    } catch (error) {}
  }

  return (
    <View style={styles.containerCenter}>
      {!!URL && (
        <Link href={URL}>
          <a target="_blank">Click this link</a>
        </Link>
      )}
      <InputFileHTML onChange={onChangeImage} mimeType={['video/*']} />
      <Button text="Enviar" onPress={onSubmit} />
      <Text>{progress}%</Text>
    </View>
  )
}

export default Lab

const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    height: 500,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.BACKGROUND_BUTTON,
  },

  text: {
    fontSize: 16,
    color: theme.COLORS.TEXT,
  },
})
