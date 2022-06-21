import { ModelCtor } from 'sequelize-typescript'

import ModelBooks from './books.model'
import ModelDataSheetProducts from './datasheet.model'
import ModelDocsProducts from './documents.model'
import ModelInstitution from './institution.model'
import ModelMusics from './music.model'
import ModelOptionsProduct from './options.model'
import ModelInfoProducts from './products.model'
import ModelSponsorProduct from './sponsor.model'
import ModelProgramsTV from './tv-programs.model'

export type DbModels = {
	ModelBooks: ModelCtor<ModelBooks>
	ModelInfoProducts: ModelCtor<ModelInfoProducts>
	ModelOptionsProduct: ModelCtor<ModelOptionsProduct>
	ModelInstitution: ModelCtor<ModelInstitution>
	ModelDataSheetProducts: ModelCtor<ModelDataSheetProducts>
	ModelDocsProducts: ModelCtor<ModelDocsProducts>
	ModelSponsorProduct: ModelCtor<ModelSponsorProduct>
	ModelMusics: ModelCtor<ModelMusics>
	ModelProgramsTV: ModelCtor<ModelProgramsTV>
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace DbModels {
	export type ModelBooks = ModelCtor
	export type ModelInfoProducts = ModelCtor
	export type ModelOptionsProduct = ModelCtor
	export type ModelInstitution = ModelCtor
	export type ModelDataSheetProducts = ModelCtor
	export type ModelDocsProducts = ModelCtor
	export type ModelSponsorProduct = ModelCtor
	export type ModelMusics = ModelCtor
	export type ModelProgramsTV = ModelCtor
}
