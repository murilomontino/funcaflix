import { GettersExhibitionsWorks } from '@/types'

import { AttrsImagesWorks } from '@/hooks/use-attrs-works/use-file-images'

export type keysWorks =
  | 'id'
  | 'artista'
  | 'titulo'
  | 'ano'
  | 'dimensao'
  | 'edicao'
  | 'impressao'
  | 'moldura'
  | 'obra_original'
  | 'tecnica'
  | 'arquivo'

export type Argument =
  | string
  | number
  | boolean
  | string[]
  | number[]
  | boolean[]
  | null
  | undefined
  | Document
  | File

export interface FormProductWorks extends Omit<AttrsImagesWorks, 'setWorks'> {
  getterWorks: GettersExhibitionsWorks[]
  submit: (id: string) => Promise<void>
}
