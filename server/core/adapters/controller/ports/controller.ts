/* eslint-disable no-unused-vars */
import { HttpRequest } from '@/adapters/controller/ports/http'
import { badRequest, ok, serverError } from '@/adapters/helpers/http-helper'
import { FileNotWriteInSystem } from '@/domain/usecases/errors/file-not-write-in-system'
import { UseCase } from '@/domain/usecases/ports/use-case'
import promiseErrorHandler from '@/helpers/error-handler'

import { ControllerGeneric } from '../helpers/controller-generic'

export class Controller implements ControllerGeneric {
	constructor(private readonly UseCase: UseCase<any, any>) {}

	async handle(httpRequest: HttpRequest) {
		const [err, resOrErr] = await promiseErrorHandler(
			this.UseCase.execute(httpRequest.body, httpRequest.params ?? {})
		)

		if (err) {
			return serverError(err.message)
		}

		if (resOrErr.isRight()) {
			if (resOrErr.extract() instanceof FileNotWriteInSystem) {
				return serverError(resOrErr.extract().message)
			}

			return badRequest(resOrErr.extract())
		}

		return ok(resOrErr.value)
	}
}

export default Controller
