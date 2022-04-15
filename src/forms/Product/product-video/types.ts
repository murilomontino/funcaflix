import { GettersVideosInfo, TypesProducts } from '@/types'
import { CategoriesVideos } from '@/types/models/videos'

import { Getter } from '@/services/config/types'

import { FormProduct } from '../types'

import { AttrsVideo } from '@/hooks/use-attrs-videos/use-attrs-videos'

type OmitProduct = Omit<
  FormProduct,
  | 'genres'
  | 'onChangeGenres'
  | 'publishedDate'
  | 'onChangePublishedDate'
  | 'onChangeImageURL'
  | 'resetProduct'
  | 'onChangeCategory'
  | 'category'
>

export interface FormProductVideo extends AttrsVideo, OmitProduct {
  categoryVideo: CategoriesVideos
  onChangeCategoryVideo: (value: CategoriesVideos) => void
  onSubmit: () => Promise<Getter<GettersVideosInfo>>
  reset: () => void
  validated: {
    err: string[]
    isValid: boolean
  }
}

export const mapCategoryVideo = [
  {
    value: CategoriesVideos.Show,
    label: 'Show',
  },
  {
    value: CategoriesVideos.VideoClipe,
    label: 'Vídeo Clipe',
  },
]

export const mapTypeVideo = [
  {
    value: TypesProducts.MP4,
    label: 'Vídeo',
  },
  {
    value: TypesProducts.URL,
    label: 'Link',
  },
]
