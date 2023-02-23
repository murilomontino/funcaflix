import { InterfaceError } from '@/helpers/interface-error'

export class ErrorQueryDatabase extends Error implements InterfaceError {
	constructor(
		message = 'Erro ao executar query no banco de dados, verifique a causa',
		options = null
	) {
		super(message, options)
		this.name = 'ErrorQueryDatabase'
	}
}
