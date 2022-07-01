/* eslint-disable no-unused-vars */
import assert from 'assert'
import { Model, ModelStatic } from 'sequelize'

import { Either, left, right } from '@/shared/either'

import { FindRepository } from '../interfaces/find-repository'
import { Options } from '../interfaces/options'

type ID = { id: number }

export class SequelizeFindByPK<T> implements FindRepository<T> {
	constructor(private readonly Model: ModelStatic<Model<T>>) {}

	async run(params: ID, options?: Options): Promise<Either<T, Error>> {
		assert(params.id, 'ID é obrigatório')
		const object = await this.Model.findByPk(params.id, options)

		if (!object) {
			return right(new Error('Não foi possível encontrar o objeto'))
		}

		return left(object as unknown as T)
	}
}
