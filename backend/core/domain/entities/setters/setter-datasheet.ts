
import { Either, left, PromiseEither, right } from '@/shared/either'
import { IDatasheet } from '@/types/setters'
import { object, string, number, bool } from 'yup'

export class SetterDataSheet implements IDatasheet {
	public readonly idProduct: number
	public readonly name: string
	public readonly about: string
	public readonly responsible: boolean
	public readonly function: number
	public readonly imgProfile: string
	public readonly idUser: number

	private constructor(params: IDatasheet) {
		Object.assign(this, params)
	}

	get params(): IDatasheet {
		return Object.assign({}, this)
	}

	static get schema() {
		return object().shape({
			idProduct: number().required(),
			name: string().required().lowercase(),
			about: string().required().lowercase(),
			responsible: bool().required().default(false),
			function: number().required(),
			imgProfile: string().lowercase(),
			idUser: number(),
		})
	}

	static async create(
		params: IDatasheet
	): PromiseEither<SetterDataSheet, Error> {
		const entityOrErr: Either<SetterDataSheet, Error> =
			await SetterDataSheet.schema
				.validate(params, {
					abortEarly: false,
				})
				.then((paramsValidate) => {
					const cast = SetterDataSheet.schema.cast(paramsValidate)
					return left(new SetterDataSheet(cast))
				})
				.catch((err: Error) => {
					return right(err) as any
				})

		return entityOrErr
	}
}
