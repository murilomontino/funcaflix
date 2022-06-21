import { Either } from '@/shared/either'

import { Options } from './options'

/* eslint-disable no-unused-vars */
type ID = { id: number }
export interface UpdateEntity<Instance, Entity> {
	run(params: Instance & ID, options?: Options): Promise<Either<Entity, Error>>
}
