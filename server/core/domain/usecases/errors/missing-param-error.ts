import { InterfaceError } from '@/helpers/interface-error'

export class MissingParamError extends Error implements InterfaceError {
	constructor({ message = 'Parâmetro obrigatório', parameter }) {
		super(`${message}: ${parameter}`)
		this.name = 'MissingParamError'
	}
}
