import { Request, Response } from 'express'

import { ControllerGeneric } from '../../core/adapters/controller/helpers'
import { HttpRequest } from '../../core/adapters/controller/ports/http'
import { colorize } from '../helpers/colorize'

// Adaptador de rotas do Express para o Controller Generic utilizado pela arquitetura do projeto (Clean Architecture)
export const adaptRoute = (controller: ControllerGeneric) => {
	return async (req: Request, res: Response) => {
		const httpRequest: HttpRequest = {
			body: req.body,
			params: { ...req.params, ...req.query },
		}

		const { body, statusCode } = await controller.handle(httpRequest)

		res.status(statusCode).send(body).end()

		if (process.env.NODE_ENV === 'development') {
			console.log(colorize(statusCode, req.url, req.method as any))
		}
	}
}
