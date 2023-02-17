import {
  IBook,
  ICulturalProfile,
  IDatasheet,
  IDocProjects,
  IDocumentsProducts,
  IEvent,
  IPlaylist,
  IProduct,
  IProjects,
  ITVPrograms,
  IUser
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

export type IGetterUser = IUser

export interface IGetterEvent extends IEvent, IProduct {
  id: number
  thumbnail: string
  createdAt: string
}