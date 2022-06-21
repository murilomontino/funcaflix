import { InterfaceError } from '@/helpers/interface-error'

export class NotFoundProductError extends Error implements InterfaceError {
	constructor(id: string, Author?: string, Title?: string) {
		const title = Title || 'Titulo Não Informado'
		const author = Author || 'Author não informado'

		const message = `A obra, ${title}, de ${id} - do ${author} - não foi encontrada`

		super(message)
		this.name = 'NotFoundProductError'
	}
}
