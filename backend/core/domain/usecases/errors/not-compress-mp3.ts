import { InterfaceError } from '@/helpers/interface-error'

export class NotCompressMP3 extends Error implements InterfaceError {
	constructor(name: string) {
		super(name + ' não foi comprimido')
		this.name = 'NotCompressMP3'
	}
}
