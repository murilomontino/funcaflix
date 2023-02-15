import { InterfaceError } from '@/helpers/interface-error'

export class InvalidParamError extends Error implements InterfaceError {
	constructor({ message =
		'Parâmetro inválido'
		, parameter }: { message?: string, parameter: string }) {
		super(`${message}: ${parameter}`)
		this.name = 'InvalidParamError'
	}
}
