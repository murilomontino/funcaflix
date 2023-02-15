
import { Either, left, PromiseEither, right } from '@/shared/either'
import { IDocumentsProducts } from '@/types/setters'
import { object, string, number } from 'yup'

export class SetterDocumentsProducts implements IDocumentsProducts {
	public readonly idProduct: number
	public readonly title: string
	public readonly description: string
	public readonly type: number
	public readonly filePath: string

	private constructor(params: IDocumentsProducts) {
		Object.assign(this, params)
	}

	get params() {
		return Object.assign({}, this)
	}

	static get schema() {
		return object().shape({
			idProduct: number().positive().required(),
			title: string().trim().uppercase().required(),
			description: string().trim().uppercase(),
			type: number().positive().required(),
			filePath: string().trim(),
		})
	}

	static async create(
		params: IDocumentsProducts
	): PromiseEither<SetterDocumentsProducts, Error> {
		const entityOrErr: Either<SetterDocumentsProducts, Error> =
			await SetterDocumentsProducts.schema
				.validate(params, {
					abortEarly: false,
				})
				.then((paramsValidate) => {
					const cast = SetterDocumentsProducts.schema.cast(paramsValidate)
					return left(new SetterDocumentsProducts(cast))
				})
				.catch((err: Error) => {
					return right(err) as any
				})

		return entityOrErr
	}
}
