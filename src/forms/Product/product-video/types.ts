import { FormProduct } from '../types'

import { AttrsVideo } from '@/hooks/use-attrs-videos/use-attrs-videos'

type OmitProduct = Omit<
  FormProduct,
  'genres' | 'onChangeGenres' | 'publishedDate' | 'onChangePublishedDate' | 'onChangeImageURL'
>

export interface FormProductVideo extends AttrsVideo, OmitProduct {}
