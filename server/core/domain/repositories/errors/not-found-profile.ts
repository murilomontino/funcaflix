import { InterfaceError } from '@/helpers/interface-error'

export class NotFoundProfile extends Error implements InterfaceError {
	constructor(
		message = 'Erro ao executar busca de perfil cultural',
		id: number,
		options = null
	) {
		const msg = `${message} com id ${id}`
		super(msg, options)
		this.name = 'NotFoundProfile'
	}
}
