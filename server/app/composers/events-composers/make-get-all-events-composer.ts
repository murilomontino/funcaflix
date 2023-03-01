import { Controller } from '@/adapters/controller'
import { ControllerGeneric } from '@/adapters/controller/helpers'
import { SequelizeEventsRepository } from '@/domain/repositories'
import { FindAllEventsUseCase } from '@/domain/usecases'
import { database } from 'mapacultural-database'

export const makeGetAllEventsComposers = (): ControllerGeneric => {
	return new Controller(
		new FindAllEventsUseCase(new SequelizeEventsRepository(database))
	)
}
