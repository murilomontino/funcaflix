import { ControllerStreamOutFile } from '@/adapters/controller'
import { ControllerFileGeneric } from '@/adapters/controller/helpers'
import {
	GetPDFProductBookUseCase,
	CreateReadStreamUseCase,
	PathExistsUseCase,
} from '@/domain/usecases'

export const makeGetPDFBooksComposer = (): ControllerFileGeneric => {
	const UseCase = new GetPDFProductBookUseCase(
		new CreateReadStreamUseCase(),
		new PathExistsUseCase()
	)
	const Controller = new ControllerStreamOutFile(UseCase)
	return Controller
}
