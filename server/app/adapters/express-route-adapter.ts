import { Request, Response } from 'express'

import { ControllerGeneric } from '../../core/adapters/controller/helpers'
import { HttpRequest } from '../../core/adapters/controller/ports/http'

// Adaptador de rotas do Express para o Controller Generic utilizado pela arquitetura do projeto (Clean Architecture)
export const adaptRoute = (controller: ControllerGeneric) => {
	return async (req: Request, res: Response) => {
		const httpRequest: HttpRequest = {
			body: req.body,
			params: { ...req.params, ...req.query },
		}

		const httpResponse = await controller.handle(httpRequest)

		const LOG = `[${req.method}] ${req.url} - ${httpResponse.statusCode}`

		res.status(httpResponse.statusCode).send(httpResponse.body).end()

		if (process.env.NODE_ENV === 'development') {
			console.log(LOG)
		}
	}
}
