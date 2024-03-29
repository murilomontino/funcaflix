import { PromiseEither } from '@/shared/either'
import { FINANCIAL_RESOURCES } from '@/types/constants'
import { IGetterEvent } from '@/types/getters'

export interface IEventsRepository {
	findAll(): PromiseEither<IGetterEvent[], Error>
	findEventByID(id: number): PromiseEither<IGetterEvent, Error>
	findAllEventsByUserID(id: number): PromiseEither<IGetterEvent[], Error>
	findAllEventsByFinancialResource(
		resource: FINANCIAL_RESOURCES
	): PromiseEither<IGetterEvent[], Error>
}
