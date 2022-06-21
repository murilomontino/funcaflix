import { InterfaceError } from '@/helpers/interface-error'

export class FileNotWriteInSystem extends Error implements InterfaceError {
	constructor(message) {
		super(message)
		this.name = 'FileNotWriteInSystem'
	}
}
