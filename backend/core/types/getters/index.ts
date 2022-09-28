import {
  IProduct,
  IBook,
  IDatasheet,
  IDocumentsProducts,
  IPlaylist,
  ITVPrograms,
  IProjects,
  IDocProjects,
  ICulturalProfile,
} from '../setters'
export interface IGetterProduct extends IProduct {
  id: number
}

export interface IGetterBooks extends IBook {
  id: number
  pdf: string
  thumbnail: string
}

export interface IGetterDataSheet extends IDatasheet {
  id: number
}

export interface IGetterDocProduct extends IDocumentsProducts {
  id: number
}

export interface IGetterOptions {
  label: string
  value: number
}

export interface IGetterPlaylist extends IPlaylist {
  id: number
  count: number
  playlistId: string
}

export interface IGetterTVPrograms extends ITVPrograms {
  id: number
}

export interface IGetterProjects extends IProjects {
  docs: IDocProjects[]
}

export type IGetterCulturalProfile = ICulturalProfile
