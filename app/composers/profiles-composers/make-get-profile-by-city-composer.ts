import { ControllerGeneric } from '@/adapters/controller/helpers'
import { FindAllByCityProfileUseCase } from '@/domain/usecases'
import { CulturalProfileRepositorySequelize } from '@/domain/repositories'
import { Controller } from '@/adapters/controller'

export const makeGetProfileByCityComposer = (): ControllerGeneric => {
  return new Controller(
    new FindAllByCityProfileUseCase(
      new CulturalProfileRepositorySequelize()
      )
    )
}
 