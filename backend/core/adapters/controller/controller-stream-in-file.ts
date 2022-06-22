import { Readable } from 'stream'

import { HttpParams } from '@/adapters/controller/ports/http'
import { badRequest, notFound, ok } from '@/adapters/helpers/http-helper'
import { tryCatch } from '@/decorators'
import { UseCaseStream } from '@/domain/usecases/ports/use-case-stream'
import logger from '@/main/config/logger'

import { ControllerStreamGeneric } from './helpers'

export class ControllerStreamInFile implements ControllerStreamGeneric {
	// eslint-disable-next-line no-unused-vars
	constructor(private readonly UseCase: UseCaseStream<Readable, any, any>) {}
	@tryCatch(logger, 'GET /stream-in - 500')
	async handle(stream: Readable, httpParams: HttpParams) {
		const streamOrError = await this.UseCase.execute(stream, httpParams)

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

		logger.info(`[GET] /stream - 200`)
		return ok(streamOrError.value)
	}
}

export default ControllerStreamInFile
