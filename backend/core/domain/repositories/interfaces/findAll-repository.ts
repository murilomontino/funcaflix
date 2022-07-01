/* eslint-disable no-unused-vars */

import { Transaction } from 'sequelize/types'

import { Either } from '@/shared/either'

/*
	Interface Partial<Record<keyof Omit<T, 'id' | 'produtoId'>, boolean>>

	Em Partial é possível tornar os campos de T opcionais, ou seja, não obrigatórios

	Em Record temos o mapeamento de chaves pra valores booleans

	Omit é uma função que retira um ou mais elementos de um objeto,
	considerando que sempre a a busca deve retornar o objeto com id e produtoId

	keyof pega todas as chaves de um objeto T
*/

export type ParamsGraphQL<T> = Partial<Record<keyof Omit<T, 'id'>, boolean>>

export type Options = {
	transaction?: Transaction
}

export interface FindAllRepository<T> {
	run(
		params?: ParamsGraphQL<T>,
		where?: Partial<T> | any,
		options?: Options
	): Promise<Either<T[], Error>>
}
