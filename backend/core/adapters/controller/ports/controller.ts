/* eslint-disable no-unused-vars */
import { HttpRequest } from '@/adapters/controller/ports/http'
import { badRequest, ok, serverError } from '@/adapters/helpers/http-helper'
import { UseCase } from '@/domain/usecases/ports/use-case'

import { ControllerGeneric } from '../helpers/controller-generic'

export class Controller implements ControllerGeneric {
	constructor(private readonly UseCase: UseCase<any, any>) {}

	async handle(httpRequest: HttpRequest) {
		try {
			const responseOrErr = await this.UseCase.execute(
				httpRequest.body,
				httpRequest.params ?? {}
			)

			if (responseOrErr.isRight()) {
				switch (responseOrErr.value.name) {
					case 'FileNotWriteInSystem':
						return serverError(responseOrErr.value.message)
					default:
						return badRequest(responseOrErr.value)
				}
			}

			return ok(responseOrErr.value)
		} catch (error) {
			return serverError(error)
		}
	}
}

export default Controller
