import { InterfaceError } from '@/helpers/interface-error'

export class FolderNotCreatedInSystem extends Error implements InterfaceError {
	constructor(message) {
		super(message)
		this.name = 'FolderNotCreatedInSystem'
	}
}
