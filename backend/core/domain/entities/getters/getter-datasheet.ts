/* eslint-disable no-unused-vars */
import { IGetterDataSheet } from '@/types/getters'
import { IDatasheet } from '@/types/setters'

import { GetterEntity } from './getter-entity'

export class GetterDataSheet
	extends GetterEntity<IGetterDataSheet>
	implements IDatasheet
{
	public id: number
	public idProduct: number
	public name: string
	public about: string
	public responsible: boolean
	public function: number
	public imgProfile: string
	public idUser: number

	public build(params: IGetterDataSheet): GetterDataSheet {
		this.id = params.id
		this.idProduct = params.idProduct
		this.name = params.name
		this.about = params.about
		this.responsible = params.responsible
		this.function = params.function
		this.imgProfile = params.imgProfile
		this.idUser = params.idUser

		return this
	}

	public params() {
		return {
			id: this.id,
			idProduct: this.idProduct,
			name: this.name,
			about: this.about,
			responsible: this.responsible,
			function: this.function,
			imgProfile: this.imgProfile,
			idUser: this.idUser,
		} as GetterDataSheet
	}
}
