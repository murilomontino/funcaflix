import { InterfaceError } from '@/helpers/interface-error'

export class NotFoundMP3 extends Error implements InterfaceError {
	constructor(albumId: string, nome_unico: string) {
		const message = `A música do ${albumId}, com nome_unico ${nome_unico} - não foi encontrada`

		super(message)
		this.name = 'NotFoundMP3'
	}
}
