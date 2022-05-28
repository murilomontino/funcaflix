import { useEffect, useState } from 'react'

import { GettersYoutube, SettersYoutube } from '@/types'

import api from '@/services'
import { Getter } from '@/services/config/types'

type Props = {
  file: File
}

export const useSubmitVideo = ({ file }: Props) => {
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    setProgress(0)
    return () => {
      setProgress(0)
    }
  }, [file])

  const onChangeProgress = (progress: number) => {
    setProgress(progress)
  }

  const submit = async (document: SettersYoutube): Promise<Getter<GettersYoutube>> => {
    try {
      const formData = new FormData()
      formData.append('file', file, file.name)

      const { data } = await api.post<Getter<GettersYoutube>>('videos', formData, {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent
          const percent = Math.floor((loaded / total) * 100)
          onChangeProgress(percent)
        },
        headers: {
          'content-type': 'multipart/form-data; boundary=WebKitFormBoundary9n00RyX5AIcRgRpg',
        },
        params: {
          name: file.name,
          ext: file.type,
          size: file.size,
          ...document,
        },
      })

      return data
    } catch (error) {
      return { error: error.message, statusCode: 500 }
    }
  }

  return {
    submit,
    progress,
    onChangeProgress,
  }
}
