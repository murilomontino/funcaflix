/* eslint-disable no-unused-vars */
import { IGetterProduct } from '@/types/getters'
import { IProduct } from '@/types/setters'

import { GetterEntity } from './getter-entity'

export class GetterProduct
	extends GetterEntity<IGetterProduct>
	implements IProduct
{
	public id: number
	public title: string
	public about: string
	public category: number
	public subCategory: number
	public thumbnail: string
	public link: string
	public cpf_cnpj: string
	public idUser: number
	public idUserRegistered: number
	public active: boolean
	public financialResource: number
	public existSubProd?: boolean
	public idSubProd?: number
	public createdAt?: Date | string
	public updatedAt?: Date | string

	private constructor() {
		super()
	}

	static build(params: IGetterProduct): GetterProduct {
		const {
			id,
			title,
			about,
			category,
			subCategory,
			thumbnail,
			link,
			cpf_cnpj,
			idUser,
			idUserRegistered,
			active,
			financialResource,
			existSubProd,
			idSubProd,
			createdAt,
			updatedAt,
		} = params

		return new GetterProduct()
			.defineId(id)
			.defineTitle(title)
			.defineAbout(about)
			.defineCategory(category)
			.defineSubCategory(subCategory)
			.defineThumbnail(thumbnail)
			.defineLink(link)
			.defineCpfCnpj(cpf_cnpj)
			.defineIdUser(idUser)
			.defineIdUserRegistered(idUserRegistered)
			.defineActive(active)
			.defineFinancialResource(financialResource)
			.defineExistSubProd(existSubProd)
			.defineIdSubProd(idSubProd)
			.defineCreatedAt(createdAt)
			.defineUpdatedAt(updatedAt)
	}

	public defineId(id: number): GetterProduct {
		this.id = id
		return this
	}

	public defineTitle(title: string = ''): GetterProduct {
		this.title = title
		return this
	}

	public defineAbout(about: string = ''): GetterProduct {
		this.about = about
		return this
	}

	public defineCategory(category: number): GetterProduct {
		this.category = category
		return this
	}

	public defineSubCategory(subCategory: number = null): GetterProduct {
		this.subCategory = subCategory
		return this
	}

	public defineThumbnail(thumbnail: string = null): GetterProduct {
		if (typeof thumbnail === 'string') {
			const thumbnailSplit = thumbnail.split('/')
			const thumbnailName = thumbnailSplit[thumbnailSplit.length - 1]
			this.thumbnail = thumbnailName
			return this
		}

		this.thumbnail = thumbnail
		return this
	}

	public defineLink(link: string = null): GetterProduct {
		this.link = link
		return this
	}

	public defineCpfCnpj(cpf_cnpj: string = null): GetterProduct {
		this.cpf_cnpj = cpf_cnpj
		return this
	}

	public defineIdUser(idUser: number = 0): GetterProduct {
		this.idUser = idUser
		return this
	}

	public defineIdUserRegistered(idUserRegistered: number = 0): GetterProduct {
		this.idUserRegistered = idUserRegistered
		return this
	}

	public defineActive(active: boolean = null): GetterProduct {
		this.active = active
		return this
	}

	public defineFinancialResource(financialResource: number = 0): GetterProduct {
		this.financialResource = financialResource
		return this
	}

	public defineExistSubProd(existSubProd: boolean = null): GetterProduct {
		this.existSubProd = existSubProd
		return this
	}

	public defineIdSubProd(idSubProd: number = 0): GetterProduct {
		this.idSubProd = idSubProd
		return this
	}

	public defineCreatedAt(createdAt: Date | string = null): GetterProduct {
		if (createdAt instanceof Date) {
			this.createdAt = createdAt.toISOString()
			return this
		}
		this.createdAt = createdAt
		return this
	}

	public defineUpdatedAt(updatedAt: Date | string = null): GetterProduct {
		if (updatedAt instanceof Date) {
			this.updatedAt = updatedAt.toISOString()
			return this
		}
		this.updatedAt = updatedAt
		return this
	}

	public params(): IGetterProduct {
		return Object.assign({}, this)
	}
}
