import { Response } from 'express'

import { HttpRequest } from '@/adapters/controller/ports/http'
import { badRequest, notFound } from '@/adapters/helpers/http-helper'
import { tryCatch } from '@/decorators'
import { UseCaseStream } from '@/domain/usecases/ports/use-case-stream'
import logger from '@/main/config/logger'

import { ControllerFileGeneric } from './helpers'

export class ControllerStreamOutFile implements ControllerFileGeneric {
	// eslint-disable-next-line no-unused-vars
	constructor(private readonly UseCase: UseCaseStream<any, any, any>) {}
	@tryCatch(logger, 'GET /stream - 500')
	async handle(httpRequest: HttpRequest, httpResponse: Response) {
		httpResponse.setHeader('Transfer-Encoding', 'chunked')
		const streamOrError = await this.UseCase.execute(httpRequest.params)

		if (streamOrError.isRight()) {
			switch (streamOrError.value.name) {
				case 'MissingParamError':
					logger.error(`[GET] stream - 400 - ${streamOrError.value.message}`)
					return badRequest(streamOrError.value)
				default:
					logger.error(`[GET] stream - 404 - ${streamOrError.value.message}`)
					return notFound(streamOrError.value)
			}
		}
		streamOrError.value.stream.pipe(httpResponse)
		return logger.info(`[GET] /stream - 200`)
	}
}

export default ControllerStreamOutFile
