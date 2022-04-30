import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useQuery } from 'react-query'

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

  const { isLoading, error, data } = useQuery('tokenVerify', async () => {
    const {
      data: { data },
    } = await api.get('verify-oauth-token')
    const { verified } = data
    return { verified }
  })

  useEffect(() => {
    if (data) {
      const verify = async () => {
        const {
          data: { data },
        } = await api.get('generate-oauth-token')
        const { url } = data

        setURL(url)
      }
      verify()
    }
  }, [data])

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

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  return (
    <View style={styles.containerCenter}>
      {!!URL && data?.verified && (
        <Link href={URL}>
          <a target="_blank">Click this link</a>
        </Link>
      )}
      <p>{data?.verified}</p>
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
