// Adaptador de rotas do Express para o Controller Generic utilizado pela arquitetura do projeto (Clean Architecture)

import { Request, Response } from 'express'

import { ControllerFileGeneric } from '../../core/adapters/controller/helpers'
import { HttpRequest } from '../../core/adapters/controller/ports/http'

// Este adaptador é utilizado para stream de arquivos (files)
export const adaptFileRoute = (controller: ControllerFileGeneric) => {
	return async (req: Request, res: Response) => {
		const httpRequest: HttpRequest = {
			body: req.body,
			params: { ...req.params, ...req.query },
		}

		await controller.handle(httpRequest, res)
	}
}
