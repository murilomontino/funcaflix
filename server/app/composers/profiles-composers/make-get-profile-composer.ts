import { Controller } from '@/adapters/controller'
import { ControllerGeneric } from '@/adapters/controller/helpers'
import { CulturalProfileRepositorySequelize } from '@/domain/repositories'
import { FindByIdProfileUseCase} from '@/domain/usecases'

export const makeGetProfileComposer = (): ControllerGeneric => {
  return new Controller(
    new FindByIdProfileUseCase(
      new CulturalProfileRepositorySequelize()
      )
    )
}
 