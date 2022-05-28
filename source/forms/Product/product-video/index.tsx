/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { GettersVideosInfo, TypesProducts } from '@/types'
import { createContext } from 'use-context-selector'

import { FormProductVideoFile, StateTypeSetVideos } from './types'

export const FormProductVideoContext = createContext({} as FormProductVideoFile)

type Props = {
  children: React.ReactNode | JSX.Element
  data: GettersVideosInfo[]
}

const FormProductVideoProvider = ({ children, data }: Props) => {
  // State -----------------------------------------------------------------------
  const [videos, setVideos] = useState<GettersVideosInfo[]>(data)
  const [type, setType] = useState<TypesProducts.LINK | TypesProducts.MP4>(null)
  const [selectedVideo, setSelectedVideo] = useState<GettersVideosInfo>(null)
  const [file, setFile] = useState<File>()
  const [url, setUrl] = useState<string>('')

  const reset = useCallback(() => {
    setType(null)
    setSelectedVideo(null)
    setFile(null)
    setUrl('')
  }, [])

  // cleanup
  useEffect(() => {
    return () => {
      reset()
    }
  }, [])

  const onChangeVideos = useCallback(
    (onChange: StateTypeSetVideos) => {
      setVideos((state) => {
        if (!state) return []
        return onChange(state)
      })
    },
    [videos]
  )

  const onChangeUrl = useCallback(
    (value: string) => {
      setUrl(value)
    },
    [url]
  )
  const onChangeType = useCallback(
    (value: TypesProducts.LINK | TypesProducts.MP4) => {
      setType(value)
    },
    [type]
  )

  const onChangeFile = useCallback(
    (file: File) => {
      setFile(file)
    },
    [file]
  )

  const onChangeSelectedVideo = useCallback(
    (value: GettersVideosInfo) => {
      setSelectedVideo(value)
    },
    [selectedVideo]
  )

  const validated = useMemo(() => {
    const isValidFile = TypesProducts.MP4 === type && !!file
    const isValidUrl = TypesProducts.LINK === type && !!url

    const isValid = isValidFile || isValidUrl

    const messageInvalidFile = isValidFile && 'Selecione um arquivo MP4'
    const messageInvalidUrl = isValidUrl && 'Informe uma URL válida'

    const message = TypesProducts.MP4 === type ? messageInvalidFile : messageInvalidUrl

    return { err: [message], isValid }
  }, [])

  const onSubmit = useCallback(async () => {
    return null
  }, [])

  return (
    <FormProductVideoContext.Provider
      value={{
        onSubmit,
        onChangeVideos,
        videos,
        onChangeType,
        onChangeSelectedVideo,
        file,
        onChangeFile,
        onChangeUrl,
        url,
        selectedVideo,
        type,
        reset,
        validated,
      }}
    >
      {children}
    </FormProductVideoContext.Provider>
  )
}

export default FormProductVideoProvider
