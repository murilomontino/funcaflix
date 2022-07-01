/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useState } from 'react'

import { GettersVideosInfo } from '@/types'
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
  const [selectedVideo, setSelectedVideo] = useState<GettersVideosInfo>(null)

  const onChangeVideos = useCallback(
    (onChange: StateTypeSetVideos) => {
      setVideos((state) => {
        if (!state) return []
        return onChange(state)
      })
    },
    [videos]
  )

  const onChangeSelectedVideo = useCallback(
    (value: GettersVideosInfo) => {
      setSelectedVideo(value)
    },
    [selectedVideo]
  )

  return (
    <FormProductVideoContext.Provider
      value={{
        onChangeVideos,
        videos,
        onChangeSelectedVideo,
        selectedVideo,
      }}
    >
      {children}
    </FormProductVideoContext.Provider>
  )
}

export default FormProductVideoProvider
