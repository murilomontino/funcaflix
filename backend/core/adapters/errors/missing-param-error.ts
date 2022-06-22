import { InterfaceError } from '@/helpers/interface-error'

export class MissingParamError extends Error implements InterfaceError {
	constructor(paramName: string) {
		super(paramName)
		this.name = 'MissingParamError'
	}
}
