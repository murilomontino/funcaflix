import { useContextSelector } from 'use-context-selector'

import { FormProductVideoContext } from './index'

export const useFormVideoFile = () => {
  const file = useContextSelector(FormProductVideoContext, (state) => state.file)

  const onChangeFile = useContextSelector(FormProductVideoContext, (state) => state.onChangeFile)

  return {
    file,
    onChangeFile,
  }
}

export const useFormVideoUrl = () => {
  const url = useContextSelector(FormProductVideoContext, (state) => state.url)
  const onChangeUrl = useContextSelector(FormProductVideoContext, (state) => state.onChangeUrl)
  return {
    url,
    onChangeUrl,
  }
}

export const useFormVideoType = () => {
  const type = useContextSelector(FormProductVideoContext, (state) => state.type)
  const onChangeType = useContextSelector(FormProductVideoContext, (state) => state.onChangeType)
  return {
    type,
    onChangeType,
  }
}

export const useFormVideoSelectedVideo = () => {
  const selectedVideo = useContextSelector(FormProductVideoContext, (state) => state.selectedVideo)
  const onChangeSelectedVideo = useContextSelector(
    FormProductVideoContext,
    (state) => state.onChangeSelectedVideo
  )
  return {
    selectedVideo,
    onChangeSelectedVideo,
  }
}

export const useFormVideoResetAndSubmit = () => {
  const reset = useContextSelector(FormProductVideoContext, (state) => state.reset)
  const onSubmit = useContextSelector(FormProductVideoContext, (state) => state.onSubmit)
  return {
    reset,
    onSubmit,
  }
}

export const useFormVideos = () => {
  const videos = useContextSelector(FormProductVideoContext, (state) => state.videos)
  const onChangeVideos = useContextSelector(
    FormProductVideoContext,
    (state) => state.onChangeVideos
  )
  return {
    videos,
    onChangeVideos,
  }
}
