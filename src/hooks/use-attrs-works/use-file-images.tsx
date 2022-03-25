import { Dispatch, SetStateAction, useCallback, useState } from 'react'

import { v4 } from 'uuid'

import { keysWorks, Argument } from '@/forms/Product/product-works/type'

const useFileImages = () => {
  const [works, setWorks] = useState<Map<keysWorks, Argument>[]>([])

  const onChangeWorks = useCallback(
    (fileList: FileList) => {
      const files = Array.from(fileList)

      const arrayMap = files.map((item) => {
        const map = new Map<keysWorks, Argument>()
        map.set('ano', '')
        map.set('artista', '')
        map.set('titulo', '')
        map.set('dimensao', '')
        map.set('edicao', '')
        map.set('impressao', '')
        map.set('moldura', '')
        map.set('obra_original', true)
        map.set('tecnica', '')
        map.set('id', v4())
        map.set('arquivo', item)

        return map
      })
      setWorks((state) => [...state, ...arrayMap])
    },
    [works]
  )

  const onChangeAttrYearWork = useCallback(
    (id: string) => {
      return (value: string) => {
        setWorks((state) => {
          state.find((item) => item.get('id') === id)?.set('ano', value)
          return state
        })
      }
    },
    [works]
  )

  const onChangeAttrArtistWork = useCallback(
    (id: string) => {
      return (value: string) => {
        setWorks((state) => {
          state.find((item) => item.get('id') === id)?.set('artista', value)
          return state
        })
      }
    },
    [works]
  )

  const onChangeAttrTitleWork = useCallback(
    (id: string) => {
      return (value: string) => {
        setWorks((state) => {
          state.find((item) => item.get('id') === id)?.set('titulo', value)

          return state
        })
      }
    },
    [works]
  )

  const onChangeAttrDimensionWork = useCallback(
    (id: string) => {
      return (value: string) => {
        setWorks((state) => {
          state.find((item) => item.get('id') === id)?.set('dimensao', value)
          return state
        })
      }
    },
    [works]
  )

  const onChangeAttrEditionWork = useCallback(
    (id: string) => {
      return (value: string) => {
        setWorks((state) => {
          state.find((item) => item.get('id') === id)?.set('edicao', value)
          return state
        })
      }
    },
    [works]
  )

  const onChangeAttrPrintWork = useCallback(
    (id: string) => {
      return (value: string) => {
        setWorks((state) => {
          state.find((item) => item.get('id') === id)?.set('impressao', value)
          return state
        })
      }
    },
    [works]
  )

  const onChangeAttrMoldWork = useCallback(
    (id: string) => {
      return (value: string) => {
        setWorks((state) => {
          state.find((item) => item.get('id') === id)?.set('moldura', value)
          return state
        })
      }
    },
    [works]
  )

  const onChangeAttrOriginalWork = useCallback(
    (id: string) => {
      return (value: boolean) => {
        setWorks((state) => {
          state.find((item) => item.get('id') === id)?.set('obra_original', value)
          return state
        })
      }
    },
    [works]
  )

  const onChangeAttrTechniqueWork = useCallback(
    (id: string) => {
      return (value: string) => {
        setWorks((state) => {
          state.find((item) => item.get('id') === id)?.set('tecnica', value)
          return state
        })
      }
    },
    [works]
  )

  return {
    works,
    setWorks,
    onChangeWorks,
    onChangeAttrYearWork,
    onChangeAttrArtistWork,
    onChangeAttrTitleWork,
    onChangeAttrDimensionWork,
    onChangeAttrEditionWork,
    onChangeAttrPrintWork,
    onChangeAttrMoldWork,
    onChangeAttrOriginalWork,
    onChangeAttrTechniqueWork,
  }
}

export default useFileImages

export type AttrsImagesWorks = {
  works: Map<keysWorks, Argument>[]
  setWorks: Dispatch<SetStateAction<Map<keysWorks, Argument>[]>>
  onChangeWorks: (fileList: FileList) => void
  onChangeAttrYearWork: (id: string) => (value: string) => void
  onChangeAttrArtistWork: (id: string) => (value: string) => void
  onChangeAttrTitleWork: (id: string) => (value: string) => void
  onChangeAttrDimensionWork: (id: string) => (value: string) => void
  onChangeAttrEditionWork: (id: string) => (value: string) => void
  onChangeAttrPrintWork: (id: string) => (value: string) => void
  onChangeAttrMoldWork: (id: string) => (value: string) => void
  onChangeAttrOriginalWork: (id: string) => (value: boolean) => void
  onChangeAttrTechniqueWork: (id: string) => (value: string) => void
}
