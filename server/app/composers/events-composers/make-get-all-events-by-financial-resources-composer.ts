import { Controller } from '@/adapters/controller'
import { ControllerGeneric } from '@/adapters/controller/helpers'
import { SequelizeEventsRepository } from '@/domain/repositories'
import { FindAllEventsByFinancialResourcesUseCase } from '@/domain/usecases'
import { database } from 'mapacultural-database'

export const makeUseCaseFindAllEventsByFinancialResources =
	(): FindAllEventsByFinancialResourcesUseCase => {
		return new FindAllEventsByFinancialResourcesUseCase(
			new SequelizeEventsRepository(database)
		)
	}

export const makeGetAllEventsByFinancialResourceComposers =
	(): ControllerGeneric => {
		return new Controller(makeUseCaseFindAllEventsByFinancialResources())
	}
