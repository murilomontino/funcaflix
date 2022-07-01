import { ControllerStreamOutFile } from '../../../backend/core/adapters/controller'
import { ControllerFileGeneric } from '../../../backend/core/adapters/controller/helpers'
import { GetPDFProductBookUseCase } from '../../../backend/core/domain/usecases'
import { CreateReadStreamUseCase } from '../../../backend/core/domain/usecases'

export const makeGetPDFBooksComposer = (): ControllerFileGeneric => {
  const StreamUseCase = new CreateReadStreamUseCase()
  const UseCase = new GetPDFProductBookUseCase(StreamUseCase)
  const Controller = new ControllerStreamOutFile(UseCase)
  return Controller
}
