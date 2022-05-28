// @generated: @expo/next-adapter@2.1.52
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useQuery } from 'react-query'

import Main from '@/modules/products/add-videos'
import { GettersVideosInfo } from '@/types'

import ButtonSocial from '@/components/molecule/button-social'
import TemplateAdmin from '@/components/templates/admin'

import FormProductVideoProvider from '@/forms/Product/product-video'

import api from '@/services'
import requests from '@/services/config/requests'
import { Getter } from '@/services/config/types'

type Props = {
  videos: GettersVideosInfo[]
}

const verify = async (): Promise<string> => {
  const {
    data: { data },
  } = await api.get(requests.OAuth.generateOAuthToken)
  const { url } = data

  return url
}

const HOUR = 1000 * 60 * 60

export default function AddVideo({ videos }: Props) {
  const [URL, setURL] = useState<string>(null)
  const [staleTime, setStaleTime] = useState<number>(0)

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

  useEffect(() => {
    if (data?.isExpired) {
      verify().then(setURL)
    }
    if (data?.expiry_date) {
      const time = data.expiry_date - Date.now()
      setInterval(() => {
        api.get(requests.OAuth.refreshOAuthToken)
      }, time)
      setStaleTime(time)
    }
  }, [data?.isExpired])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <TemplateAdmin>
      {!!URL && data?.isExpired ? (
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
          }}
        >
          <ButtonSocial name="google" url={URL} />
        </View>
      ) : (
        <FormProductVideoProvider data={videos}>
          <Main />
        </FormProductVideoProvider>
      )}
    </TemplateAdmin>
  )
}

export const getStaticProps = async (ctx) => {
  const config = {
    props: {
      videos: [],
    },
  }

  const { data } = await api.get<Getter<GettersVideosInfo[]>>('videos', {
    params: {
      artista: true,
      titulo: true,
      categoria_de_video: true,
      thumbnail: true,
      sobre_a_obra: true,
      recurso: true,
      cpf: true,
      cnpj: true,
      youtubeId: true,
    },
  })

  if (data.statusCode === 200) {
    return {
      ...config,
      props: {
        videos: data.data,
      },
    }
  }
  return config
}
