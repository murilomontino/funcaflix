// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import Main from '@/modules/products/add-videos'
import { GettersVideosInfo } from '@/types'

import TemplateAddProduct from '@/components/templates/add-product'

import api from '@/services'
import { Getter } from '@/services/config/types'

type Props = {
  videos: GettersVideosInfo[]
}

export default function AddVideo({ videos }: Props) {
  return (
    <TemplateAddProduct>
      <Main videos={videos} />
    </TemplateAddProduct>
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
