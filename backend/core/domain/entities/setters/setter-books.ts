import { object, string, number, bool } from 'yup'

import { Either, left, PromiseEither, right } from '@/shared/either'
import { IBook } from '@/types/setters'

export class SetterBooks implements IBook {
	public readonly title: string
	public readonly idDocument: number
	public readonly author: string
	public readonly subTitle: string
	public readonly isbn: string
	public readonly publisher: string
	public readonly publicationDate: string
	public readonly numberOfPages: string
	public readonly dimensions: string
	public readonly synopsis: string
	public readonly illustration: boolean
	public readonly illustrator: string
	public readonly tags: string
	public readonly genres: string

	private constructor(params: IBook) {
		params.isbn = params.isbn.replace(/-/g, '')
		Object.assign(this, params)
	}

	get params(): IBook {
		return Object.assign({}, this)
	}

	static get schema() {
		return object().shape({
			title: string().trim().lowercase().required(),
			idDocument: number().positive().required(),
			author: string().trim().lowercase().required(),
			subTitle: string().trim().lowercase(),
			isbn: string().trim().required(),
			publisher: string().trim().lowercase(),
			publicationDate: string().trim().lowercase(),
			numberOfPages: string().trim(),
			dimensions: string().trim().lowercase(),
			synopsis: string().trim().lowercase(),
			illustration: bool().default(false),
			illustrator: string().trim().lowercase(),
			tags: string().trim().lowercase(),
			genres: string().trim().lowercase(),
		})
	}

	static async create(params: IBook): PromiseEither<SetterBooks, Error> {
		const entityOrErr: Either<SetterBooks, Error> = await SetterBooks.schema
			.validate(params, {
				abortEarly: false,
			})
			.then((paramsValidate) => {
				const cast = SetterBooks.schema.cast(paramsValidate)
				return left(new SetterBooks(cast))
			})
			.catch((err: Error) => {
				return right(err) as any
			})

		return entityOrErr
	}
}
