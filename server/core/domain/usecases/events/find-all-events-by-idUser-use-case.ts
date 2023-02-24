import { IEventsRepository } from '@/domain/repositories'
import { isValidID } from '@/helpers'
import { Transform } from '@/helpers/decorators/transform'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterEvent } from '@/types/getters'

import { MissingParamError } from '../errors'
import { UseCase } from '../ports/use-case'

type Params = {
	idUser: number
}

export class FindAllEventsByUserIDUseCase
	implements UseCase<never, IGetterEvent[]>
{
	constructor(private readonly repository: IEventsRepository) { }

	@Transform(Number, ['idUser'])
	async execute(_, { idUser }: Params): PromiseEither<IGetterEvent[], Error> {
		if (!isValidID(idUser)) {
			return right(new MissingParamError({ parameter: 'idUser' }))
		}

		const eventsOrErr = await this.repository.findAllEventsByUserID(idUser)

		if (eventsOrErr.isRight()) {
			return right(eventsOrErr.value)
		}

		return left(eventsOrErr.extract())
	}
}
