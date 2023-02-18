import { PromiseEither } from '@/shared/either'
import { IGetterEvent } from '@/types/getters'

export interface IEventsRepository {
	findAll(): PromiseEither<IGetterEvent[], Error>
	findEventByID(id: number): PromiseEither<IGetterEvent, Error>
	findAllEventsByUserID(id: number): PromiseEither<IGetterEvent[], Error>
}
