import { useState } from 'react'

import { IFormValues } from '@/modules/products/add-book/type'
import { GettersYoutube } from '@/types'

import api from '@/services'
import { Getter } from '@/services/config/types'

type Props = {
  file: File
}

export const useSubmitBook = () => {
  const [progress, setProgress] = useState<number>(0)

  const onChangeProgress = (progress: number) => {
    setProgress(progress)
  }

  const submitFile = async (document: any, file: File): Promise<Getter<GettersYoutube>> => {
    try {
      const formData = new FormData()
      formData.append('file', file, file.name)

      const { data } = await api.post<Getter<GettersYoutube>>('books/v2', formData, {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent
          const percent = Math.floor((loaded / total) * 100)
          onChangeProgress(percent)
        },
        headers: {
          'content-type': 'multipart/form-data; boundary=WebKitFormBoundary9n00RyX5AIcRgRpg',
        },
        params: {
          ...document,
          name: file.name,
          ext: file.type,
          size: file.size,
        },
      })

      return data
    } catch (error) {
      return { error: error.message, statusCode: 500 }
    }
  }

  const submit = async (document: IFormValues) => {
    console.log('document', document)

    const { data } = await api.post('books/v2', {
      ...document,
      cpf_cnpj: document.cpfOrCnpj,
      category: 1,
      subCategory: 1,
      type: 1,
      tags: document.tags.join('.'),
      genres: document.genres.join('.'),
    })

    console.log(data)

    return {
      statusCode: data.statusCode,
    }
  }

  return {
    submit,
    progress,
    onChangeProgress,
  }
}
