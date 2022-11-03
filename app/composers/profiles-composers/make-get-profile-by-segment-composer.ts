import { ControllerGeneric } from '@/adapters/controller/helpers'
import { FindAllBySegmentProfileUseCase } from '@/domain/usecases'
import { CulturalProfileRepositorySequelize } from '@/domain/repositories'
import { Controller } from '@/adapters/controller'

export const makeGetProfileBySegmentComposer = (): ControllerGeneric => {
  return new Controller(
    new FindAllBySegmentProfileUseCase(
      new CulturalProfileRepositorySequelize()
      )
    )
}
 