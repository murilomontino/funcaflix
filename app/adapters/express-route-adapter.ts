import { Request, Response } from 'express'

import { ControllerGeneric } from '../../backend/core/adapters/controller/helpers'
import { HttpRequest } from '../../backend/core/adapters/controller/ports/http'

// Adaptador de rotas do Express para o Controller Generic utilizado pela arquitetura do projeto (Clean Architecture)
export const adaptRoute = (controller: ControllerGeneric) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: { ...req.params, ...req.query },
    }

    const httpResponse = await controller.handle(httpRequest)

    const LOG = `[${req.method}] ${req.url} - ${httpResponse.statusCode}`

    if (httpResponse.statusCode === 200) {
      res
        .status(200)
        .send({
          statusCode: httpResponse.statusCode,
          data: httpResponse.body,
        })
        .end()
    } else {
      res
        .status(200)
        .send({
          statusCode: httpResponse.statusCode,
          error: httpResponse.body,
        })
        .end()
    }
  }
}
