// @generated: @expo/next-adapter@2.1.52
import React, { useEffect } from 'react'
import { Text } from 'react-native'

import { GettersVideosInfo } from '@/types'
import axios from 'axios'

import TemplateAddProduct from '@/components/templates/add-product'

import api from '@/services'
import { Getter } from '@/services/config/types'

type Props = {
  videos: Getter<GettersVideosInfo[]>
}

export default function AddVideo({ videos }: Props) {
  const [data, setData] = React.useState()
  const fetchApi = async () => {
    const response = await axios.get('https://host.docker.internal:8000')
    setData(response.data)
  }

  useEffect(() => {
    fetchApi()
  }, [data])

  return (
    <TemplateAddProduct>
      <Text>{JSON.stringify(data)}</Text>
    </TemplateAddProduct>
  )
}

export const getServerSideProps = async (ctx) => {
  const config = {
    props: {
      videos: [],
    },
  }

  try {
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
    if (data.statusCode === 200) {
      return {
        props: {
          videos: data.data,
        },
      }
    }
    return config
  } catch (error) {
    return config
  }
}
