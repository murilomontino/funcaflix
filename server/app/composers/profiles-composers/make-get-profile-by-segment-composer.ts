import { Controller } from '@/adapters/controller'
import { ControllerGeneric } from '@/adapters/controller/helpers'
import { CulturalProfileRepositorySequelize } from '@/domain/repositories'
import { FindAllBySegmentProfileUseCase } from '@/domain/usecases'
import { database } from 'mapacultural-database'

export const makeGetProfileBySegmentComposer = (): ControllerGeneric => {
	return new Controller(
		new FindAllBySegmentProfileUseCase(
			new CulturalProfileRepositorySequelize(database)
		)
	)
}
