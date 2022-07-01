import { InterfaceError } from '@/helpers/interface-error'

export class NotFoundContentBook extends Error implements InterfaceError {
	constructor() {
		const message = `
		Conteudo do Livro não foi encontrado no banco de dados.
		`
		super(message)
		this.name = 'NotFoundContentBook'
	}
}
