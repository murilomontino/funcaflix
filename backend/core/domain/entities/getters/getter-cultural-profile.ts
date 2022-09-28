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
  type: string
  segment: string
  acting: string
  website: string
  youtube: string
  twitter: string
  facebook: string
  instagram: string

  private constructor() {
    super()
  }

  static build(params: IGetterCulturalProfile): GetterCulturalProfiles {
    const {
      id,
      name,
      email,
      phone,
      thumbnail,
      about,
      acting,
      facebook,
      instagram,
      segment,
      twitter,
      type,
      website,
      youtube,
      city,
    } = params

    return new GetterCulturalProfiles()
      .defineId(id)
      .defineName(name)
      .defineEmail(email)
      .definePhone(phone)
      .defineThumbnail(thumbnail)
      .defineAbout(about)
      .defineCity(city)
      .defineType(type)
      .defineSegment(segment)
      .defineActing(acting)
      .defineWebsite(website)
      .defineYoutube(youtube)
      .defineTwitter(twitter)
      .defineFacebook(facebook)
      .defineInstagram(instagram)
  }

  public defineId(id: number | string) {
    this.id = id
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

  public defineCity(city: string) {
    this.city = city
    return this
  }

  public defineType(type: string) {
    this.type = type
    return this
  }

  public defineSegment(segment: string) {
    this.segment = segment
    return this
  }

  public defineActing(acting: string) {
    this.acting = acting
    return this
  }

  public defineWebsite(website: string) {
    this.website = website
    return this
  }

  public defineYoutube(youtube: string) {
    this.youtube = youtube
    return this
  }

  public defineTwitter(twitter: string) {
    this.twitter = twitter
    return this
  }

  public defineFacebook(facebook: string) {
    this.facebook = facebook
    return this
  }

  public defineInstagram(instagram: string) {
    this.instagram = instagram
    return this
  }

  public params(): ICulturalProfile {
    return Object.assign({}, this)
  }
}
