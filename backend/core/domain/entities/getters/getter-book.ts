/* eslint-disable no-unused-vars */
import { IGetterBooks } from '@/types/getters'
import { IBook } from '@/types/setters'

import { GetterEntity } from './getter-entity'

export class GetterBook extends GetterEntity<IGetterBooks> implements IBook {
  public id: number
  public idDocument: number
  public author: string
  public title: string
  public subTitle: string
  public isbn: string
  public publisher: string
  public publicationDate: string
  public numberOfPages: string
  public dimensions: string
  public synopsis: string
  public illustration: boolean
  public illustrator: string
  public genres: string
  public tags: string
  public pdf: string
  public thumbnail: string

  public build(params: IGetterBooks): GetterBook {
    this.id = params.id
    this.idDocument = params.idDocument
    this.author = params.author
    this.title = params.title
    this.subTitle = params.subTitle
    this.isbn = params.isbn
    this.publisher = params.publisher
    this.publicationDate = params.publicationDate
    this.numberOfPages = params.numberOfPages
    this.dimensions = params.dimensions
    this.synopsis = params.synopsis
    this.illustration = params.illustration
    this.illustrator = params.illustrator
    this.genres = params.genres
    this.tags = params.tags
    this.pdf = params.pdf
    this.thumbnail = params.thumbnail

    return this
  }

  public params() {
    return {
      id: this.id,
      idDocument: this.idDocument,
      author: this.author,
      title: this.title,
      subTitle: this.subTitle,
      isbn: this.isbn,
      publisher: this.publisher,
      publicationDate: this.publicationDate,
      numberOfPages: this.numberOfPages,
      dimensions: this.dimensions,
      synopsis: this.synopsis,
      illustration: this.illustration,
      illustrator: this.illustrator,
      genres: this.genres,
      tags: this.tags,
      pdf: this.pdf,
      thumbnail: this.thumbnail,
    } as GetterBook
  }
}
