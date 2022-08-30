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
  createdAt?: Date
  updatedAt?: Date
  existSubProd?: boolean
  idSubProd?: number
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
  subCategory: number
  title: string
  playlistId: string
  videoId: string
  publishedAt: string
  description: string
  thumbnail: string
  active?: boolean
  createdAt?: Date
}

export interface IProjects {
  id: number
  idUser: number
  cpf: string
  nameProject: string
  summaryProject: string
  aboutProject: string
  typeProject: string
  urlProject: string
  dateStart: Date
  dateEnd: Date
  hourEnd: string
  status: number
  createdAt: string
  updateAt: string
  type: number
  company: string
  city: string
  amountOfVacancies: number
  amountOfEnrollment: number
  financialResource: string
  yearRelease: string
}
