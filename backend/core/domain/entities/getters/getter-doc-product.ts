/* eslint-disable no-unused-vars */
import { IGetterDocProduct } from '@/types/getters'
import { IDocumentsProducts } from '@/types/setters'

import { GetterEntity } from './getter-entity'

export class GetterDocProduct
	extends GetterEntity<IGetterDocProduct>
	implements IDocumentsProducts
{
	public id: number
	public idProduct: number
	public title: string
	public description: string
	public type: number
	public filePath: string

	public build(params: IGetterDocProduct): GetterDocProduct {
		this.id = params.id
		this.idProduct = params.idProduct
		this.title = params.title
		this.description = params.description
		this.type = params.type
		this.filePath = params.filePath
		return this
	}

	public params() {
		return {
			id: this.id,
			idProduct: this.idProduct,
			title: this.title,
			description: this.description,
			type: this.type,
			filePath: this.filePath,
		} as GetterDocProduct
	}
}
