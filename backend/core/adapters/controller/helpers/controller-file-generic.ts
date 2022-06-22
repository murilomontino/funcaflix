/* eslint-disable no-unused-vars */
import { Response } from 'express'

import { HttpRequest } from '@/adapters/controller/ports/http'

export interface ControllerFileGeneric {
	handle: (httpRequest: HttpRequest, httpResponse: Response) => Promise<any>
}
