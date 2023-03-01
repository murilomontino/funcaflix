import { InterfaceError } from '@/helpers/interface-error'

export class CategoryInvalidError extends Error implements InterfaceError {
	constructor({ message = 'Id deve ser uma categoria válida', category }) {
		super(`${message}: ${category} inválido`)
		this.name = 'CategoryInvalidError'
	}
}
