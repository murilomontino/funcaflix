import { Either, left, PromiseEither, right } from '@/shared/either'
import { IProduct } from '@/types/setters'
import { cpf, cnpj } from 'cpf-cnpj-validator'
import { object, string, number, bool } from 'yup'

export class SetterInfoProduct implements IProduct {
	public readonly title: string
	public readonly category: number
	public readonly subCategory: number
	public readonly about: string
	public readonly link: string
	public readonly idUser: number
	public readonly idUserRegistered: number
	public readonly cpf_cnpj: string
	public readonly active = true
	public readonly financialResource: number
	public readonly thumbnail: string
	public readonly createdAt?: Date
	public readonly updatedAt?: Date
	public readonly existSubProd?: boolean
	public readonly idSubProd?: number

	private constructor(params: IProduct) {
		params.cpf_cnpj = params.cpf_cnpj.replace(/[^\d]+/g, '')
		Object.assign(this, params)
	}

	get params(): IProduct {
		return Object.assign({}, this)
	}

	static get schema() {
		return object().shape({
			title: string().trim().lowercase().required(),
			about: string().trim().lowercase(),
			category: number().positive().required(),
			subCategory: number().positive().required(),
			link: string().trim().url().nullable(),
			financialResource: number().positive().required(),
			cpf_cnpj: string()
				.trim()
				.required()
				.test('cpf_cnpj', 'CPF ou CNPJ inválido', (value) => {
					return cpf.isValid(value) || cnpj.isValid(value)
				}),
			idUser: number().nullable(),
			idUserRegistered: number().nullable(),
			active: bool().default(true),
		})
	}

	static async create(
		params: IProduct
	): PromiseEither<SetterInfoProduct, Error> {
		const entityOrErr: Either<SetterInfoProduct, Error> =
			await SetterInfoProduct.schema
				.validate(params, {
					abortEarly: false,
				})
				.then((paramsValidate) => {
					const cast = SetterInfoProduct.schema.cast(paramsValidate)
					return left(new SetterInfoProduct(cast as any))
				})
				.catch((err: Error) => {
					return right(err) as any
				})

		return entityOrErr
	}
}
