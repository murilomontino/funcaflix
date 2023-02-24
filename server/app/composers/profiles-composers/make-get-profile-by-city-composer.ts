import { Controller } from '@/adapters/controller'
import { ControllerGeneric } from '@/adapters/controller/helpers'
import { CulturalProfileRepositorySequelize } from '@/domain/repositories'
import { FindAllByCityProfileUseCase } from '@/domain/usecases'

export const makeGetProfileByCityComposer = (): ControllerGeneric => {
	return new Controller(
		new FindAllByCityProfileUseCase(new CulturalProfileRepositorySequelize())
	)
}
