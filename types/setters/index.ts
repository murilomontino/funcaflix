export interface IProduct {
	title: string
	about: string
	category: number
	financialResource: number
	thumbnail: string
	subCategory: number
	link: string
	cpf_cnpj: string
	idUser: number
	idUserRegistered: number
	active: boolean
	createdAt?: Date | string
	updatedAt?: Date | string
	existSubProd?: boolean
	idSubProd?: number
}

export interface IDocumentsProducts {
	idProduct: number
	title: string
	description: string
	type: number
	filePath: string
}

export interface IDatasheet {
	idProduct: number
	name: string
	about: string
	responsible: boolean
	function: number
	imgProfile: string
	idUser: number
}

export interface IBook {
	author: string
	title: string
	subTitle: string
	isbn: string
	publisher: string
	publicationDate: string
	numberOfPages: string
	dimensions: string
	synopsis: string
	illustration: boolean
	illustrator: string
	genres: string
	tags: string
}

export interface IPlaylist {
	id: number
	title: string
	description: string
	thumbnail: string
	publishedAt: string
	link: string
}

export interface ITVPrograms {
	id: number
	idProduct: number
	subCategory: number
	title: string
	playlistId: string
	videoId: string
	publishedAt: string
	description: string
	thumbnail: string
	active?: boolean
	createdAt?: Date
}

export interface IProjects {
	id: number
	idUser: number
	cpf: string
	nameProject: string
	summaryProject: string
	aboutProject: string
	typeProject: string
	urlProject: string
	dateStart: Date
	dateEnd: Date
	hourEnd: string
	status: number
	createdAt: string
	updateAt: string
	type: number
	company: string
	city: string
	amountOfVacancies: number
	amountOfEnrollment: number
	financialResource: string
	yearRelease: string
}

export interface IDocProjects {
	id: number
	idProject: number
	file: string
	createdAt: string
	name: string
	type: number
	typeFile: string
	link: string
	updated: boolean
}

export enum SocialNetwork {
	FACEBOOK = 'facebook',
	INSTAGRAM = 'instagram',
	LINKEDIN = 'linkedin',
	TWITTER = 'twitter',
	YOUTUBE = 'youtube',
}

export type MediaSocial = {
	type: SocialNetwork
	link: string
}
export interface ICulturalProfile {
	id: string | number
	city: string
	name: string
	type: string
	thumbnail: string
	banner: string
	email: string
	phone: string
	about: string
	segment: string
	acting: string
	website: string
	youtube: string
	twitter: string
	facebook: string
	instagram: string
	hashtags: string
	uf: string
}

export interface IUser {
	id: number
	cpf: string
	cpf_cnpj: string
	cpfRepresented: string
	representative: string
	email: string
	name: string
	type: string
	city: string
	password: string
	typeAccess: string
	dateRegister: string
	dateUpdate: string
	validAccount: number
	accessKey: string
	ipUsed: string
	accessCount: number
	updatedByAdmin: number
	idValidated: number
	typeUser: number
	sector: string
	agency: string
	migrated: string
	idMigrated: number
	columnControlDocs: number
	session: number
	dateLastAccess: string
	active: number
	dateLogout: string
	idAgency: number
}

export interface IEvent {
	id: number
	idProduct: number
	typeEvent: number
	subject: number
	local: string
	cep: string
	address: string
	number: string
	complement: string
	neighborhood: string
	city: string
	uf: string
	dateStart: string
	dateEnd: string
	hourStart: string
	hourEnd: string
	createdAt: string
}
