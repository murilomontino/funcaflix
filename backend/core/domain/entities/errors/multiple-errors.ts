import { InterfaceError } from '@/helpers/interface-error'

export class MultipleErrors extends Error implements InterfaceError {
	constructor(str: string[]) {
		super('\n' + str.join('\n'))
		this.name = 'DocumentInvalid'
	}
}
