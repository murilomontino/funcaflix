/* eslint-disable no-unused-vars */
import { IGetterPlaylist } from '@/types/getters'
import { IPlaylist } from '@/types/setters'

import { GetterEntity } from './getter-entity'

type OmitLink = Omit<IPlaylist, 'link'>
type OmitIGetterPlaylistLink = Omit<IGetterPlaylist, 'link'> & {
  link?: string
}

export class GetterPlaylistTVPrograms extends GetterEntity<IGetterPlaylist> implements OmitLink {
  public id: number
  public title: string
  public description: string
  public thumbnail: string
  public publishedAt: string
  public count: number
  public playlistId: string
  public link: string

  public build(params: OmitIGetterPlaylistLink): GetterPlaylistTVPrograms {
    this.id = params.id
    this.title = params.title
    this.description = params.description
    this.thumbnail = params.thumbnail
    this.publishedAt = params.publishedAt
    this.count = params.count
    this.playlistId = params.playlistId
    this.link = params.link || 'Não Informado'
    return this
  }

  public params() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      thumbnail: this.thumbnail,
      publishedAt: this.publishedAt,
      count: this.count,
      playlistId: this.playlistId,
    } as GetterPlaylistTVPrograms
  }
}
