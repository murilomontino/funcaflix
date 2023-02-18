import { InterfaceError } from '@/helpers/interface-error'

export class ServerError extends Error implements InterfaceError {
	constructor(reason: string) {
		super('Server error: ' + reason + '.')
		this.name = 'ServerError'
	}
}
