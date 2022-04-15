/* eslint-disable no-unused-vars */
export enum CategoriesVideos {
  NaoInformado = 0,
  VideoClipe,
  Show,
}

export const mapCategoriesVideos = [
  {
    id: CategoriesVideos.NaoInformado,
    categoria: 'Não informado',
  },
  {
    id: CategoriesVideos.VideoClipe,
    categoria: 'VideoClipe',
  },
  {
    id: CategoriesVideos.Show,
    categoria: 'Show',
  },
]

export type videos = {
  id?: number
  produtoId: number
  documentoId: number
  nome_unico: string
  titulo: string
  artista: string
  categoria_de_video: CategoriesVideos
}
