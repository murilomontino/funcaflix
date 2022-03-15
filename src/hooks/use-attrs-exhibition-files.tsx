import { useCallback, useMemo, useState } from 'react'

import { ExhibitionPhotosTypes } from '@/types'

import { keys } from '@/forms/Product/product-exhibition/type'
import { Document } from '@/forms/Product/types'

export const useAttrsExhibitionFiles = () => {
  const [mapFiles, setMapFiles] = useState<Map<keys, unknown>[]>([])
  const [countValidatedFiles, setCountValidatedFiles] = useState<number>(0)

  const onChangeMapFiles = useCallback(
    (values) => {
      setMapFiles(values)
    },
    [mapFiles]
  )

  const onChangeFile = useCallback(
    (files: Document[]) => {
      const arrayMap = files.map((item, index) => {
        const map = new Map<keys, unknown>()
        Object.entries(item).forEach(([key, value]) => {
          map.set(key as keys, value)
        })
        map.set('descricao', '')
        map.set('data', '')
        map.set('tipo_de_foto', 0)
        map.set('id', crypto.randomUUID())
        map.set('error', false)
        map.set('titulo', '')
        return map
      })

      setMapFiles((state) => [...state, ...arrayMap])
    },
    [mapFiles]
  )

  const onChangeAttrTitlePhoto = useCallback(
    (id: string) => {
      return (value: string) => {
        setMapFiles((state) => {
          state.find((item) => item.get('id') === id)?.set('titulo', value)
          return state
        })
      }
    },
    [mapFiles]
  )

  const onChangeAttrDatePhoto = useCallback(
    (id: string) => {
      return (value: Date) => {
        setMapFiles((state) => {
          state.find((item) => item.get('id') === id)?.set('data', value.toISOString())
          return state
        })
      }
    },
    [mapFiles]
  )

  const onChangeAttrDescriptionPhoto = useCallback(
    (id: string) => {
      return (value: string) => {
        setMapFiles((state) => {
          state.find((item) => item.get('id') === id)?.set('descricao', value)
          return state
        })
      }
    },
    [mapFiles]
  )

  const onChangeAttrTypePhoto = useCallback(
    (id: string) => {
      return (value: ExhibitionPhotosTypes) => {
        setMapFiles((state) => {
          state.find((item) => item.get('id') === id)?.set('tipo_de_foto', value)
          return state
        })
      }
    },
    [mapFiles]
  )

  const onChangeAttrErrorPhoto = useCallback(
    (id: string) => {
      return (value: boolean) => {
        setMapFiles((state) => {
          state.find((item) => item.get('id') === id)?.set('error', value)
          return state
        })
      }
    },
    [mapFiles]
  )

  const validateFiles = useMemo(() => {
    return countValidatedFiles === 0
  }, [countValidatedFiles])

  const photoValidator = useCallback(
    (value: number) => {
      setCountValidatedFiles((state) => state + value)
    },
    [countValidatedFiles]
  )

  const onRemovePhoto = useCallback(
    (id: string) => {
      const _id = id
      return () => {
        setMapFiles((state) => state.filter((item) => item.get('id') !== _id))
      }
    },
    [mapFiles]
  )

  return {
    mapFiles,
    validateFiles,
    countValidatedFiles,
    onChangeFile,
    onChangeAttrErrorPhoto,
    onChangeMapFiles,
    onRemovePhoto,
    onChangeAttrTitlePhoto,
    onChangeAttrDatePhoto,
    onChangeAttrDescriptionPhoto,
    onChangeAttrTypePhoto,
    photoValidator,
  }
}

export interface AttrsExhibitionFiles {
  mapFiles: Map<keys, unknown>[]
  countValidatedFiles: number
  validateFiles: boolean
  onChangeFile: (files: Document[]) => void
  onChangeMapFiles: (
    mapFiles: Map<keys, unknown>[]
  ) => void | ((state: Map<keys, unknown>[]) => void)
  onRemovePhoto: (id: string) => () => void
  onChangeAttrTitlePhoto: (id: string) => (value: string) => void
  onChangeAttrDatePhoto: (id: string) => (value: Date) => void
  onChangeAttrDescriptionPhoto: (id: string) => (value: string) => void
  onChangeAttrTypePhoto: (id: string) => (value: ExhibitionPhotosTypes) => void
  onChangeAttrErrorPhoto: (id: string) => (value: boolean) => void
  photoValidator: (value: number) => void
}
