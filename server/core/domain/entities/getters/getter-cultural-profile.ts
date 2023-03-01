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
	banner: string
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
	hashtags: string
	uf: string

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
			banner,
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
			hashtags,
			uf,
		} = params

		return new GetterCulturalProfiles()
			.defineId(id)
			.defineName(name)
			.defineEmail(email)
			.definePhone(phone)
			.defineThumbnail(thumbnail)
			.defineBanner(banner)
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
			.defineHashtags(hashtags)
			.defineUf(uf)
	}

	public defineId(id: number | string = null) {
		this.id = id
		return this
	}

	public defineName(name: string = null) {
		this.name = name
		return this
	}

	public defineEmail(email: string = null) {
		this.email = email
		return this
	}

	public definePhone(phone: string = null) {
		this.phone = phone
		return this
	}

	public defineThumbnail(thumbnail: string = null) {
		this.thumbnail = thumbnail
		return this
	}

	public defineAbout(about: string = null) {
		this.about = about
		return this
	}

	public defineCity(city: string = null) {
		this.city = city
		return this
	}

	public defineType(type: string = null) {
		this.type = type
		return this
	}

	public defineSegment(segment: string = null) {
		this.segment = segment
		return this
	}

	public defineActing(acting: string = null) {
		this.acting = acting
		return this
	}

	public defineWebsite(website: string = null) {
		this.website = website
		return this
	}

	public defineYoutube(youtube: string = null) {
		this.youtube = youtube
		return this
	}

	public defineTwitter(twitter: string = null) {
		this.twitter = twitter
		return this
	}

	public defineFacebook(facebook: string = null) {
		this.facebook = facebook
		return this
	}

	public defineInstagram(instagram: string = null) {
		this.instagram = instagram
		return this
	}

	public defineBanner(banner: string = null) {
		this.banner = banner
		return this
	}

	public defineHashtags(hashtags: string = null) {
		this.hashtags = hashtags
		return this
	}

	public defineUf(uf: string = null) {
		this.uf = uf
		return this
	}

	public params(): ICulturalProfile {
		return Object.assign({}, this)
	}
}
