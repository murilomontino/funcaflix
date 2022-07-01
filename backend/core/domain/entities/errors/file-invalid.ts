import { InterfaceError } from '@/helpers/interface-error'

export class FileInvalid extends Error implements InterfaceError {
	constructor(paramName: string) {
		super('Arquivo inválido:' + paramName)
		this.name = 'FileInvalid'
	}
}
