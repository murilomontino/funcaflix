import { ControllerGeneric } from '@/adapters/controller/helpers'
import { FindAllBySearchProfileUseCase } from '@/domain/usecases'
import { CulturalProfileRepositorySequelize } from '@/domain/repositories'
import { Controller } from '@/adapters/controller'

export const makeGetProfileBySearchComposer = (): ControllerGeneric => {
  return new Controller(
    new FindAllBySearchProfileUseCase(
      new CulturalProfileRepositorySequelize()
    )
  )
}
