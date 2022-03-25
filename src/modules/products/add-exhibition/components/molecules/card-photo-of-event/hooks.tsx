import { useMemo, useState } from 'react'

import { ExhibitionPhotosTypes } from '@/types'

type Props = {
  defaultTitle: string
  defaultDescription: string
  defaultTypeOfPhoto: ExhibitionPhotosTypes
  defaultDate: string
}
function useHooks({
  defaultDate,
  defaultDescription,
  defaultTitle,
  defaultTypeOfPhoto,
}: Props) {
  const [titleState, setTitle] = useState(() => {
    if (defaultTitle) {
      return defaultTitle
    }
    return ''
  })
  const [typeOfPhotoState, setTypeOfPhoto] = useState<ExhibitionPhotosTypes>(
    () => {
      if (defaultTypeOfPhoto) {
        return defaultTypeOfPhoto
      }

      return 0
    }
  )
  const [dateState, setDate] = useState(() => {
    if (defaultDate) {
      return new Date(defaultDate)
    }
    return null
  })
  const [descriptionState, setDescription] = useState(() => {
    if (defaultDescription) {
      return defaultDescription
    }
    return ''
  })

  const validatedPhoto = useMemo(() => {
    return !!(
      titleState.trim() &&
      descriptionState.trim() &&
      typeOfPhotoState &&
      dateState
    )
  }, [titleState, descriptionState, typeOfPhotoState, dateState])

  return {
    validatedPhoto,
    titleState,
    typeOfPhotoState,
    dateState,
    descriptionState,
    setTitle,
    setTypeOfPhoto,
    setDate,
    setDescription,
  }
}

export default useHooks
