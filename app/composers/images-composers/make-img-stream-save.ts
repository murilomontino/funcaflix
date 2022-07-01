import { ControllerStreamInFile } from '@/adapters/controller'
import { ControllerStreamGeneric } from '@/adapters/controller/helpers/controller-stream-generic'
import { CompressIMGuseCase } from '@/domain/usecases'
import { SaveCapaStreamUseCase } from '@/domain/usecases/images/save-capa-stream/save-capa-stream-use-case'

export const MakeImgStreamSave = (): ControllerStreamGeneric => {
	const CompressIMG = new CompressIMGuseCase()
	const UseCase = new SaveCapaStreamUseCase(CompressIMG)
	return new ControllerStreamInFile(UseCase)
}
