import { videos, products, youtube } from '@/types'

type OmitVideos = Omit<videos, 'documentoId' | 'categoria_de_video'>
type OmitProduct = Omit<products, 'generos' | 'tags'>

export interface GettersVideosInfo extends OmitVideos, OmitProduct, youtube {
  id: number
  thumbnail: string
  youtubeId: string
  tags?: string[]
  generos?: string[]
}
