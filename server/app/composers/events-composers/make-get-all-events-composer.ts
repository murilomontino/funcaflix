import { Controller } from '@/adapters/controller'
import { ControllerGeneric } from '@/adapters/controller/helpers'
import { FindAllEventsUseCase } from '@/domain/usecases'
import { SequelizeEventsRepository } from '@/index'
import { database } from 'mapacultural-database'

export const makeGetAllEventsComposers = (): ControllerGeneric => {
	return new Controller(
		new FindAllEventsUseCase(
			new SequelizeEventsRepository(
				database
			)
		)
	)
}
