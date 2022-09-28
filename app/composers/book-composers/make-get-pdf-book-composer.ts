import { ControllerStreamOutFile } from '../../../backend/core/adapters/controller'
import { ControllerFileGeneric } from '../../../backend/core/adapters/controller/helpers'
import {
  GetPDFProductBookUseCase,
  CreateReadStreamUseCase,
  PathExistsUseCase,
} from '../../../backend/core/domain/usecases'

export const makeGetPDFBooksComposer = (): ControllerFileGeneric => {
  const UseCase = new GetPDFProductBookUseCase(
    new CreateReadStreamUseCase(),
    new PathExistsUseCase()
  )
  const Controller = new ControllerStreamOutFile(UseCase)
  return Controller
}
