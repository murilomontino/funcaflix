import { IEventsRepository } from '@/domain/repositories'
import { isValidFinancialResource } from '@/helpers'
import { Transform } from '@/helpers/decorators/transform'
import { left, PromiseEither, right } from '@/shared/either'
import { FINANCIAL_RESOURCES } from '@/types/constants'
import { IGetterEvent } from '@/types/getters'

import { MissingParamError } from '../errors'
import { UseCase } from '../ports/use-case'

type Params = {
	financialResources: FINANCIAL_RESOURCES
}

export class FindAllEventsByFinancialResourcesUseCase
	implements UseCase<never, IGetterEvent[]>
{
	constructor(private readonly repository: IEventsRepository) { }

	@Transform(Number, ['financialResources'])
	async execute(
		_,
		{ financialResources }: Params
	): PromiseEither<IGetterEvent[], Error> {
		if (!isValidFinancialResource(financialResources)) {
			return right(new MissingParamError({ parameter: 'financialResources' }))
		}

		const eventsOrErr = await this.repository.findAllEventsByFinancialResource(
			financialResources
		)

		if (eventsOrErr.isRight()) {
			return right(eventsOrErr.value)
		}

		return left(eventsOrErr.extract())
	}
}
