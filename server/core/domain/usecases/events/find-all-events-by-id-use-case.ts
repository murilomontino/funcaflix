import { IEventsRepository } from '@/domain/repositories'
import { isValidID } from '@/helpers'
import { Transform } from '@/helpers/decorators/transform'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterEvent } from '@/types/getters'

import { MissingParamError } from '../errors'
import { UseCase } from '../ports/use-case'

type Params = {
	id: number | string
}

export class FindAllEventsByIDUseCase implements UseCase<never, IGetterEvent> {
	constructor(private readonly repository: IEventsRepository) { }

	@Transform(Number, ['id'])
	async execute(_, { id }: Params): PromiseEither<IGetterEvent, Error> {
		if (!isValidID(id) || typeof id === 'string') {
			return right(new MissingParamError({ parameter: 'id' }))
		}

		const eventsOrErr = await this.repository.findEventByID(id)

		if (eventsOrErr.isRight()) {
			return right(eventsOrErr.value)
		}

		return left(eventsOrErr.extract())
	}
}
