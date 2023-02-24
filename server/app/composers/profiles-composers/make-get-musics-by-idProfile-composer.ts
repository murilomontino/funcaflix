import { Controller } from '@/adapters/controller'
import { ControllerGeneric } from '@/adapters/controller/helpers'
import { SequelizeProductsRepository } from '@/domain/repositories/products-repository'
import { FindAllProductsByCategoryAndUser } from '@/domain/usecases'
import { CATEGORIES } from '@/types/constants'

export const makeGetMusicsByIDProfileComposer = (): ControllerGeneric => {
	return new Controller(
		new FindAllProductsByCategoryAndUser(
			CATEGORIES.AUDIO,
			new SequelizeProductsRepository()
		)
	)
}
