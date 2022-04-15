import { videos, products } from '@/types'

type OmitVideos = Omit<videos, 'documentoId' | 'categoria_de_video'>
type OmitProduct = Omit<products, 'generos'>

export interface GettersVideosInfo extends OmitVideos, OmitProduct {
  id: number
  thumbnail: string
}
