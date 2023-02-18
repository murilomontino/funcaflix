import { HttpRequest } from '@/adapters/controller/ports/http'
import { badRequest, notFound } from '@/adapters/helpers/http-helper'
import { Response } from 'express'

import { ControllerFileGeneric } from './helpers'

export class ControllerStreamOutFile implements ControllerFileGeneric {
	// eslint-disable-next-line no-unused-vars
	constructor(private readonly UseCase) {}

	async handle(httpRequest: HttpRequest, httpResponse: Response) {
		httpResponse.setHeader('Transfer-Encoding', 'chunked')
		const streamOrError = await this.UseCase.execute(httpRequest.params)

		if (streamOrError.isRight()) {
			switch (streamOrError.value.name) {
				case 'MissingParamError':
					return badRequest(streamOrError.value)
				default:
					return notFound(streamOrError.value)
			}
		}
		streamOrError.value.stream.pipe(httpResponse)
	}
}

export default ControllerStreamOutFile
