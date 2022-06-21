import { DbModels } from '@mapa-cultural/database/types/source/models/types'

import { SetterBooks } from '@/domain/entities/setters/setter-books'
import { SequelizeInsert } from '@/domain/repositories/ports-repositories/sequelize-insert'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterBooks } from '@/types/getters'
import { IBook } from '@/types/setters'

import { UseCase } from '../ports/use-case'

export class InsertBookUseCase implements UseCase<IBook, IGetterBooks> {
	constructor(
		private readonly repository: SequelizeInsert<
			DbModels.ModelBooks,
			IBook,
			IGetterBooks
		>
	) {}

	async execute(body: IBook): PromiseEither<IGetterBooks, Error> {
		const bookOrErr = await SetterBooks.create(body)

		if (bookOrErr.isRight()) return right(bookOrErr.value)

		const insertOrErr = await this.repository.run(bookOrErr.value)

		if (insertOrErr.isRight()) return right(insertOrErr.value)

		return left(insertOrErr.value.params())
	}
}
