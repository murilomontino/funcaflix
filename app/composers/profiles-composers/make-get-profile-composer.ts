import { ControllerGeneric } from '@/adapters/controller/helpers'
import { FindByIdProfileUseCase} from '@/domain/usecases'
import { CulturalProfileRepositorySequelize } from '@/domain/repositories'
import { Controller } from '@/adapters/controller'

export const makeGetProfileComposer = (): ControllerGeneric => {
  console.log('chega aki no make')
  return new Controller(
    new FindByIdProfileUseCase(
      new CulturalProfileRepositorySequelize()
      )
    )
}
 