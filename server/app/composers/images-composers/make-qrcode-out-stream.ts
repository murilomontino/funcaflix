import { Controller } from '@/adapters/controller'
import { ControllerGeneric } from '@/adapters/controller/helpers'

import { QRCodeImageUseCase } from '../../../core/domain/usecases'

export const makeStreamOutQrCodeComposer = (): ControllerGeneric => {
	return new Controller(new QRCodeImageUseCase())
}
