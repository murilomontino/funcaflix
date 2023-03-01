import { Either } from '@/shared/either'

import { Options } from './options'

/* eslint-disable no-unused-vars */
type ID = { id: number }
export interface UpdateRepository<Instance> {
	run(
		params: Partial<Instance> & ID,
		options?: Options
	): Promise<Either<Instance, Error>>
}
