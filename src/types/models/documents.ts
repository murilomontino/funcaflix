/* eslint-disable no-unused-vars */
export enum TypesProducts {
  MP3 = 1,
  URL,
  PDF,
  CAPA,
  PHOTOS,
  MP4,
  LINK,
}

export const mapTypesProducts = [
  {
    id: TypesProducts.MP3,
    tipo: 'MP3',
  },
  {
    id: TypesProducts.URL,
    tipo: 'URL',
  },
  {
    id: TypesProducts.PDF,
    tipo: 'PDF',
  },
  {
    id: TypesProducts.CAPA,
    tipo: 'CAPA',
  },
  {
    id: TypesProducts.PHOTOS,
    tipo: 'PHOTOS',
  },
  {
    id: TypesProducts.MP4,
    tipo: 'MP4',
  },
  {
    id: TypesProducts.LINK,
    tipo: 'LINK',
  },
]

export type documents = {
  id?: number
  produtoId: number
  tipo_de_arquivo: TypesProducts
  arquivo: string
  nome_arquivo: string
}
