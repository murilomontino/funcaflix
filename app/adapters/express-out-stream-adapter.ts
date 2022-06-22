import { Request, Response } from 'express'

import { ControllerFileGeneric } from '../../backend/core/adapters/controller/helpers'
import { HttpRequest } from '../../backend/core/adapters/controller/ports/http'

export const adaptOutFileStream = (controller: ControllerFileGeneric) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: res,
      params: { ...req.params, ...req.query },
    }

    await controller.handle(httpRequest, res)
  }
}
