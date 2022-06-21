import { Either } from '@/shared/either'

/* eslint-disable no-unused-vars */

export interface FindRepository<T> {
	run(params: any): Promise<Either<T, Error>>
}
