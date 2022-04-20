// @generated: @expo/next-adapter@2.1.52
import React from 'react'
import { Text } from 'react-native'

import { GettersVideosInfo } from '@/types'

import TemplateAddProduct from '@/components/templates/add-product'

import api from '@/services'
import { Getter } from '@/services/config/types'

export default function AddVideo({ videos }) {
  const fetchApi = async () => {
    const { data } = await api.get<Getter<GettersVideosInfo[]>>('videos', {
      params: {
        artista: true,
        titulo: true,
        categoria_de_video: true,
        cpf: true,
        cnpj: true,
        thumbnail: true,
        nome_unico: false,
      },
    })
    setVideos(() => {
      return data.statusCode === 200 ? data.data : []
    })
    return data
  }

  return (
    <TemplateAddProduct>
      <Text>{JSON.stringify(videos)}</Text>
    </TemplateAddProduct>
  )
}

export const getServerSideProps = async (ctx) => {
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
      cpf: true,
      cnpj: true,
      thumbnail: true,
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
