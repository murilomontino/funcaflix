import { Controller } from '@/adapters/controller'
import { ControllerGeneric } from '@/adapters/controller/helpers'
import { SequelizeEventsRepository } from '@/domain/repositories'
import { FindAllEventsByUserIDUseCase } from '@/domain/usecases'
import { database } from 'mapacultural-database'

export const makeGetAllEventsByUserIDComposers = (): ControllerGeneric => {
	return new Controller(
		new FindAllEventsByUserIDUseCase(new SequelizeEventsRepository(database))
	)
}
