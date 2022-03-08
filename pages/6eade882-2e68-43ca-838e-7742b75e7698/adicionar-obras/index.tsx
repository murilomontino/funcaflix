// @generated: @expo/next-adapter@2.1.52
import React, { useEffect, useState } from 'react'

import Main from '@/modules/products/add-works-exhibition'
import SkeletonTemplate from '@/modules/products/add-works-exhibition/template/skeleton'
import { GettersExhibitions } from '@/types'

import TemplateAddProduct from '@/components/templates/add-product'

import api from '@/services'
import { Getter } from '@/services/config/types'

export default function AddWorks() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const fetch = async () => {
    try {
      const { data } = await api.get<Getter<GettersExhibitions[]>>(
        'exhibitions'
      )
      if (data.statusCode === 200) {
        return data.data
      }
      return []
    } catch (error) {
      return []
    }
  }

  useEffect(() => {
    setLoading(true)
    fetch().then((data) => {
      setTimeout(() => {
        setData(data)
        setLoading(false)
      }, 1000)
    })
  }, [])

  if (isLoading)
    return (
      <TemplateAddProduct>
        <SkeletonTemplate />
      </TemplateAddProduct>
    )

  return (
    <TemplateAddProduct>
      {isLoading ? <SkeletonTemplate /> : <Main exhibitions={data} />}
    </TemplateAddProduct>
  )
}
