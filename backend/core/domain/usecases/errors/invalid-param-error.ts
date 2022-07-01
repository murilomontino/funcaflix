import { InterfaceError } from '@/helpers/interface-error'

export class InvalidParamError extends Error implements InterfaceError {
	constructor(params: string) {
		super('Param Invalid: ' + params)
		this.name = 'InvalidParamError'
	}
}
