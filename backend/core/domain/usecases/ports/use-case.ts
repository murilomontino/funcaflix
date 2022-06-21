import { PromiseEither } from '@/shared/either'

export interface UseCase<T, U> {
	execute: (_body: T, _params?: any) => PromiseEither<U, Error>
}
