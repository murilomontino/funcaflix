/* eslint-disable no-unused-vars */
import { HttpResponse, HttpRequest } from '@/adapters/controller/ports/http'
import { Response } from 'express'

export interface ControllerGeneric {
  handle: (httpRequest: HttpRequest, httpResponse?: Response) => Promise<HttpResponse>
}
