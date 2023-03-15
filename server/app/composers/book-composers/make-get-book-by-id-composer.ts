import { Controller } from '@/adapters/controller'
import { ControllerGeneric } from '@/adapters/controller/helpers'
import { BookRepositorySequelize } from '@/domain/repositories'
import { FindOneBookByIdProductUseCase } from '@/domain/usecases'

export const makeGetBookByIDComposer = (): ControllerGeneric => {
	return new Controller(
		new FindOneBookByIdProductUseCase(new BookRepositorySequelize())
	)
}
