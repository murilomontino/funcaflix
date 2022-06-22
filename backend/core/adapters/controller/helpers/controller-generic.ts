/* eslint-disable no-unused-vars */
import { Response } from 'express'

import { HttpResponse, HttpRequest } from '@/adapters/controller/ports/http'

export interface ControllerGeneric {
	handle: (
		httpRequest: HttpRequest,
		httpResponse?: Response
	) => Promise<HttpResponse>
}
