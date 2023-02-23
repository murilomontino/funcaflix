import { InterfaceError } from '@/helpers/interface-error'

export class ErrorInsertDatabase extends Error implements InterfaceError {
	constructor(err = 'default', obj: { [key: string]: any }) {
		const message = `
		Não foi possível adicionar ao Banco de Dados,
		verifique se os dados estão corretos.
		${obj.value?.toString()}
		error: ${err}
		`
		super(message)
		this.name = 'ErroInsertDatabase'
	}
}
