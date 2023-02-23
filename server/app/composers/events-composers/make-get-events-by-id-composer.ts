import { Controller } from '@/adapters/controller'
import { ControllerGeneric } from '@/adapters/controller/helpers'
import { SequelizeEventsRepository } from '@/domain/repositories'
import { FindEventByIDUseCase } from '@/domain/usecases'
import { database } from 'mapacultural-database'

export const makeGetEventsByIDComposers = (): ControllerGeneric => {
	return new Controller(
		new FindEventByIDUseCase(new SequelizeEventsRepository(database))
	)
}
