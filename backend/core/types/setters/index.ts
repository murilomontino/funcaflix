export interface IProduct {
  title: string
  about: string
  category: number
  financialResource: number
  thumbnail: string
  subCategory: number
  link: string
  cpf_cnpj: string
  idUser: number
  idUserRegistered: number
  active: boolean
}

export interface IDocumentsProducts {
  idProduct: number
  title: string
  description: string
  type: number
  filePath: string
}

export interface IDatasheet {
  idProduct: number
  name: string
  about: string
  responsible: boolean
  function: number
  imgProfile: string
  idUser: number
}

export interface IBook {
  idDocument: number
  author: string
  title: string
  subTitle: string
  isbn: string
  publisher: string
  publicationDate: string
  numberOfPages: string
  dimensions: string
  synopsis: string
  illustration: boolean
  illustrator: string
  genres: string
  tags: string
}

export interface IPlaylist {
  id: number
  title: string
  description: string
  thumbnail: string
  publishedAt: string
  link: string
}

export interface ITVPrograms {
  id: number
  idProduct: number
  title: string
  playlistId: string
  videoId: string
  publishedAt: string
  description: string
  thumbnail: string
  active?: boolean
  createdAt?: Date
}
