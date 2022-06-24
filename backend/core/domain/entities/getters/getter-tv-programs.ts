/* eslint-disable no-unused-vars */
import { IGetterTVPrograms } from '@/types/getters'
import { ITVPrograms } from '@/types/setters'

import { GetterEntity } from './getter-entity'

export class GetterTVPrograms extends GetterEntity<IGetterTVPrograms> implements ITVPrograms {
  public id: number
  public idProduct: number
  public videoId: string
  public active?: boolean
  public title: string
  public description: string
  public thumbnail: string
  public publishedAt: string
  public playlistId: string
  public createdAt?: Date

  public build(params: IGetterTVPrograms): GetterTVPrograms {
    this.id = params.id
    this.idProduct = params.idProduct
    this.videoId = params.videoId
    this.active = params.active
    this.title = params.title
    this.description = params.description
    this.thumbnail = params.thumbnail
    this.publishedAt = params.publishedAt
    this.playlistId = params.playlistId
    this.createdAt = params.createdAt.toISOString() as any
    return this
  }

  public params() {
    return {
      id: this.id,
      idProduct: this.idProduct,
      videoId: this.videoId,
      active: this.active,
      title: this.title,
      description: this.description,
      thumbnail: this.thumbnail,
      publishedAt: this.publishedAt,
      playlistId: this.playlistId,
      createdAt: this.createdAt,
    } as GetterTVPrograms
  }
}
