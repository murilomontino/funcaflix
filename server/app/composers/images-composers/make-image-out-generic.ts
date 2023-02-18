import { ControllerStreamOutFile } from '@/adapters/controller'
import { ControllerFileGeneric } from '@/adapters/controller/helpers'
import {
	CreateReadStreamUseCase,
	GetImageGenericUseCase,
} from '@/domain/usecases'

export const makeImageOutGenericComposer = (): ControllerFileGeneric => {
	const StreamUseCase = new CreateReadStreamUseCase()
	const UseCase = new GetImageGenericUseCase(StreamUseCase)
	const Controller = new ControllerStreamOutFile(UseCase)
	return Controller
}
