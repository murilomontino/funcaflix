import { Category } from '@/types'
import { CategoriesVideos } from '@/types/models/videos'

import { SettersGenericProduct } from './products'

type OmitGenericProduct = Omit<
  SettersGenericProduct,
  'capa' | 'tipo_capa' | 'name_uuid' | 'data_de_publicacao' | 'arquivo' | 'nome_arquivo' | 'generos'
>

export interface SettersVideosInfo extends OmitGenericProduct {
  categoria: Category.Video
  categoria_de_video: CategoriesVideos
  thumbnail: string
  titulo: string
  mimetype_thumbnail: 'image/png' | 'image/jpeg' | 'image/jpg'
  nome_unico?: string
  nome_cultural: string
}
