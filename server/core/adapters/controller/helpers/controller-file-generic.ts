/* eslint-disable no-unused-vars */
import { HttpRequest } from '@/adapters/controller/ports/http'
import { Response } from 'express'

export interface ControllerFileGeneric {
	handle: (httpRequest: HttpRequest, httpResponse: Response) => Promise<any>
}
