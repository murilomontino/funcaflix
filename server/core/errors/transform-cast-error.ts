import { InterfaceError } from '@/helpers/interface-error'

export class TransformCastError extends Error implements InterfaceError {
	constructor(message: string, { cause }) {
		super('Transform cast error: ' + message + '.', { cause })
		this.name = 'TransformCastError'
	}
}
