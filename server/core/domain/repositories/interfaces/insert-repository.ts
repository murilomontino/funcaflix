/* eslint-disable no-unused-vars */
import { GetterEntity } from '@/domain/entities/getters/getter-entity'
import { PromiseEither } from '@/shared/either'

import { Options } from './options'

export interface InsertRepository<ModelEntity, Setter, Getter extends Setter> {
	run(
		params: Partial<Setter>,
		options?: Options
	): PromiseEither<GetterEntity<Getter>, Error>
}
