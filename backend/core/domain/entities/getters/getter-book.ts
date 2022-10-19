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


  constructor() {
    super();
  }

  static build(params: IGetterBooks): GetterBook {
    const {
      id,
      idDocument,
      author,
      title,
      subTitle,
      isbn,
      publisher,
      publicationDate,
      numberOfPages,
      dimensions,
      synopsis,
      illustration,
      illustrator,
      genres,
      tags,
      pdf,
      thumbnail,
    } = params


    return new GetterBook()
      .defineId(id)
      .defineIdDocument(idDocument)
      .defineAuthor(author)
      .defineTitle(title)
      .defineSubTitle(subTitle)
      .defineIsbn(isbn)
      .definePublisher(publisher)
      .definePublicationDate(publicationDate)
      .defineNumberOfPages(numberOfPages)
      .defineDimensions(dimensions)
      .defineSynopsis(synopsis)
      .defineIllustration(illustration)
      .defineIllustrator(illustrator)
      .defineGenres(genres)
      .defineTags(tags)
      .definePdf(pdf)
      .defineThumbnail(thumbnail)
  }

  public defineId(id: number) {
    this.id = id
    return this
  }

  public defineIdDocument(idDocument: number) {
    this.idDocument = idDocument
    return this
  }

  public defineAuthor(author: string) {
    this.author = author
    return this
  }

  public defineTitle(title: string) {
    this.title = title
    return this
  }

  public defineSubTitle(subTitle: string) {
    this.subTitle = subTitle
    return this
  }

  public defineIsbn(isbn: string) {
    this.isbn = isbn
    return this
  }

  public definePublisher(publisher: string) {
    this.publisher = publisher
    return this
  }

  public definePublicationDate(publicationDate: string) {
    this.publicationDate = publicationDate
    return this
  }

  public defineNumberOfPages(numberOfPages: string) {
    this.numberOfPages = numberOfPages
    return this
  }

  public defineDimensions(dimensions: string) {
    this.dimensions = dimensions
    return this
  }

  public defineSynopsis(synopsis: string) {
    this.synopsis = synopsis
    return this
  }

  public defineIllustration(illustration: boolean) {
    this.illustration = illustration
    return this
  }

  public defineIllustrator(illustrator: string) {
    this.illustrator = illustrator
    return this
  }

  public defineGenres(genres: string) {
    this.genres = genres
    return this
  }

  public defineTags(tags: string) {
    this.tags = tags
    return this
  }

  public definePdf(pdf: string = null) {
    this.pdf = pdf
    return this
  }

  public defineThumbnail(thumbnail: string = null) {
    this.thumbnail = thumbnail
    return this
  }

  public params(): IGetterBooks {
    return Object.assign({}, this)
  }
}

  
