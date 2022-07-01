import { InterfaceError } from '@/helpers/interface-error'

export class NotCompressIMG extends Error implements InterfaceError {
	constructor(name: string) {
		super(name + ' não foi comprimido')
		this.name = 'NotCompressIMG'
	}
}
