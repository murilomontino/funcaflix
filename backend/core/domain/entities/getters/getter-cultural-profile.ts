/* eslint-disable no-unused-vars */
import { IGetterCulturalProfile } from '@/types/getters'
import { ICulturalProfile, MediaSocial } from '@/types/setters'

import { GetterEntity } from './getter-entity'

export class GetterCulturalProfiles
  extends GetterEntity<IGetterCulturalProfile>
  implements ICulturalProfile
{
  id: number | string
  idUser: number | string
  document: string
  name: string
  email: string
  phone: string
  thumbnail: string
  about: string
  mediaSocial: MediaSocial[]
  createdAt: Date
  updatedAt: Date
  city: string

  private constructor() {
    super()
  }

  static build(params: IGetterCulturalProfile): GetterCulturalProfiles {
    const {
      id,
      idUser,
      document,
      name,
      email,
      phone,
      thumbnail,
      about,
      createdAt,
      mediaSocial,
      updatedAt,
      city,
    } = params

    return new GetterCulturalProfiles()
      .defineId(id)
      .defineIdUser(idUser)
      .defineDocument(document)
      .defineName(name)
      .defineEmail(email)
      .definePhone(phone)
      .defineThumbnail(thumbnail)
      .defineAbout(about)
      .defineCreatedAt(createdAt)
      .defineMediaSocial(mediaSocial)
      .defineCity(city)
      .defineUpdatedAt(updatedAt)
  }

  public defineId(id: number | string) {
    this.id = id
    return this
  }

  public defineIdUser(idUser: number | string) {
    this.idUser = idUser
    return this
  }

  public defineDocument(document: string) {
    this.document = document
    return this
  }

  public defineName(name: string) {
    this.name = name
    return this
  }

  public defineEmail(email: string) {
    this.email = email
    return this
  }

  public definePhone(phone: string) {
    this.phone = phone
    return this
  }

  public defineThumbnail(thumbnail: string) {
    this.thumbnail = thumbnail
    return this
  }

  public defineAbout(about: string) {
    this.about = about
    return this
  }

  public defineMediaSocial(mediaSocial: MediaSocial[]) {
    this.mediaSocial = mediaSocial
    return this
  }

  public defineCreatedAt(createdAt: Date) {
    this.createdAt = createdAt
    return this
  }

  public defineUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt
    return this
  }

  public defineCity(city: string) {
    this.city = city
    return this
  }

  public params(): ICulturalProfile {
    return Object.assign({}, this)
  }
}
