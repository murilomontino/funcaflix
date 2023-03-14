import { Controller } from '@/adapters/controller'
import { ControllerGeneric } from '@/adapters/controller/helpers'
import { BookRepositorySequelize } from '@/domain/repositories'
import { FindAllBooksUseCase } from '@/domain/usecases'

export const makeGetBooksComposer = (): ControllerGeneric => {
	return new Controller(new FindAllBooksUseCase(new BookRepositorySequelize()))
}
