import { InterfaceError } from '@/helpers/interface-error'

export class DocumentInvalidError extends Error implements InterfaceError {
	constructor(message: string) {
		super(message + ' fornecido é inválido')
		this.name = 'DocumentInvalid'
	}
}
