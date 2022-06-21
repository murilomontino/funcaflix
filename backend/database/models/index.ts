/**
 * Configurando Models
 */

import ModelBooks from './books.model'
import ModelDataSheetProducts from './datasheet.model'
import ModelDocsProducts from './documents.model'
import ModelInstitution from './institution.model'
import ModelMusics from './music.model'
import ModelOptionsProduct from './options.model'
import ModelInfoProducts from './products.model'
import ModelSponsorProduct from './sponsor.model'
import ModelProgramsTV from './tv-programs.model'
import { DbModels } from './types'

export const db: DbModels = (() => {
	return {
		ModelBooks,
		ModelInfoProducts,
		ModelOptionsProduct,
		ModelInstitution,
		ModelDataSheetProducts,
		ModelDocsProducts,
		ModelSponsorProduct,
		ModelMusics,
		ModelProgramsTV,
	}
})()

export default db
