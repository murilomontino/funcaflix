import { ControllerStreamOutFile, Controller } from '@/adapters/controller'
import { ControllerGeneric } from '@/adapters/controller/helpers'

import {
    QRCodeImageUseCase,
} from '../../../backend/core/domain/usecases/'

export const makeStreamOutQrCodeComposer = (): ControllerGeneric => {
    return new Controller(
        new QRCodeImageUseCase()
    )
}
