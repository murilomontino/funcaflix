import { Controller } from '@/adapters/controller'
import { ControllerGeneric } from '@/adapters/controller/helpers'
import { CulturalProfileRepositorySequelize } from '@/domain/repositories'
import { FindAllBySearchProfileUseCase } from '@/domain/usecases'
import { database } from 'mapacultural-database'

export const makeGetProfileBySearchComposer = (): ControllerGeneric => {
	return new Controller(
		new FindAllBySearchProfileUseCase(
			new CulturalProfileRepositorySequelize(database)
		)
	)
}
