/* eslint-disable no-unused-vars */
import { Either, left, right } from '@/shared/either'
import assert from 'assert'
import { database } from 'mapacultural-database'
import { Model, ModelStatic } from 'sequelize'

import { Options } from '../interfaces/options'
import { UpdateRepository } from '../interfaces/update-repository'

type ID = { id: number }

export class SequelizeUpdate<T> implements UpdateRepository<T> {
	constructor(private readonly Model: ModelStatic<Model<T>>) {}

	async run(
		params: Partial<T> & ID,
		options?: Options
	): Promise<Either<T, Error>> {
		assert(params.id, 'ID é obrigatório')

		return await database.transaction(
			{ autocommit: false },
			async (transaction) => {
				const data = await this.Model.findByPk(params.id, {
					...options,
					transaction: options?.transaction || transaction,
				})

				if (!data) {
					return right(new Error('Não foi possível encontrar o objeto'))
				}

				const updated = await data.update(params, {
					...options,
					transaction: options?.transaction || transaction,
				})

				return left(updated as unknown as T)
			}
		)
	}
}
