export type IFormProductValues = {
  tags: string[]
  genres: string[]
  about: string
  thumbnail: File
  financialResource: number
  cpf_cnpj: string
  publishedDate: string
  startDate: string
  endDate: string
  category: number
  subCategory: number
  documents: IDocumentsProducts[]
  advertising: IDocumentsProducts[]
  products: IDocumentsProducts[]
  datasheet: IDatasheet[]
  culturalName: string
  biography: string
  responsible: true
  function: number
  imgProfile: File
}

export type IArtistResponsible = {
  culturalName: string
  about: string
  responsible: true
  function: number
  imgProfile: File
}

export interface IDocumentsProducts {
  title: string
  type: number
  file: File
}

export interface IDatasheet {
  name: string
  about: string
  cpf_cnpj: string
  responsible: false
  function: number
  imgProfile: File
}
