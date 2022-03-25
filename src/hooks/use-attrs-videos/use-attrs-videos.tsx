import { useCallback, useState } from 'react'

export const useAttrsVideo = (): AttrsVideo => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const onChangeTitle = useCallback(
    (value: string) => {
      setTitle(value)
    },
    [title]
  )

  const onChangeDescription = useCallback(
    (value: string) => {
      setDescription(value)
    },
    [description]
  )

  return {
    title,
    description,

    onChangeTitle,
    onChangeDescription,
  }
}

export interface AttrsVideo {
  title: string
  onChangeTitle: (value: string) => void
  description: string
  onChangeDescription: (value: string) => void
}
