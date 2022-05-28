import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useQuery } from 'react-query'

import theme from '@/theme'
import { SettersYoutube } from '@/types/products/setters/youtube'
import { FontAwesome } from '@expo/vector-icons'
import Link from 'next/link'

import Button from '@/components/atom/button'
import InputFileHTML from '@/components/atom/input-file-html'

import api from '@/services'
import requests from '@/services/config/requests'

import { useSubmitVideo } from '@/hooks/use-attrs-videos/use-submit-video'
import { useResources } from '@/hooks/utils/use-resources'

// import component 👇

//import styles 👇

const Lab = () => {
  const { isFontReady } = useResources()

  const [video, setVideo] = useState<File>(null)
  const [URL, setURL] = useState<string>(null)
  const [staleTime, setStaleTime] = useState<number>(0)

  const { submit, progress } = useSubmitVideo({ file: video })

  const { isLoading, error, data } = useQuery(
    'tokenVerify',
    async () => {
      const {
        data: { data },
      } = await api.get(requests.OAuth.verifyOAuthToken)

      return data
    },
    {
      staleTime: staleTime,
    }
  )

  const verify = async () => {
    const {
      data: { data },
    } = await api.get(requests.OAuth.generateOAuthToken)
    const { url } = data

    setURL(url)
  }

  useEffect(() => {
    if (data?.isExpired) {
      verify()
    }
    if (data?.expiry_date) {
      const time = data.expiry_date - Date.now()
      setStaleTime(time)
    }
  }, [data?.isExpired])

  if (!isFontReady) {
    return null
  }

  const onChangeVideo = (video) => {
    setVideo(video)
  }

  const object: SettersYoutube = {
    sobre_a_obra: 'Descrição do Frontend',
    tags: ['frontend', 'react', 'typescript'],
    titulo: 'Frontend com React e Typescript',
    produtoId: 7,
    nome_unico: '2e11bc5087666ccdb25247',
    categoryYoutube: null,
    channelId: null,
    privacyStatus: null,
    publishedAt: null,
    thumbnailYt: null,
    url: null,
    videoId: null,
    id: 7,
    nome_arquivo: '',
  }

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  const sendVideo = async () => {
    const a = await submit(object)
  }

  return (
    <View style={styles.containerCenter}>
      {!!URL && data?.isExpired && (
        <Link href={URL}>
          <a target="_blank">Click this link</a>
        </Link>
      )}
      <p>{staleTime}</p>
      <p>{URL}</p>
      <p>{JSON.stringify(data)}</p>
      <InputFileHTML onChange={onChangeVideo} mimeType={['video/*']} />
      <Button text="Enviar" onPress={sendVideo} />
      <Text>{progress}%</Text>
      <FontAwesome name="anchor" size={24} color="#fff" />
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
