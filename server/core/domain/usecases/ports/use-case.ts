import { PromiseEither } from '@/shared/either'
export interface UseCase<T, U> {
	execute: (body?: T, params?: unknown) => PromiseEither<U, Error>
}
