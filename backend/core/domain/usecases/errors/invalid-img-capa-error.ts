import { InterfaceError } from '@/helpers/interface-error'

export class InvalidImgCapa extends Error implements InterfaceError {
	constructor() {
		const message =
			'Verifique se o tipo da imagem de capa é jpeg ou png e tente novamente'

		super(message)
		this.name = 'InvalidImgCapa'
	}
}
