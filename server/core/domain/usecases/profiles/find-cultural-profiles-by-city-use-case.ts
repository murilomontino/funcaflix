import { CulturalProfileRepository } from '@/domain/repositories'
import { PromiseEither, right } from '@/shared/either'
import { IGetterCulturalProfile } from '@/types/getters'
import assert from 'assert'

import { UseCase } from '../ports/use-case'

type Props = {
	city: string
}

export class FindAllByCityProfileUseCase
	implements UseCase<unknown, IGetterCulturalProfile[]>
{
	constructor(
		private readonly culturalProfileRepository: CulturalProfileRepository
	) {}

	async execute(
		_,
		{ city }: Props
	): PromiseEither<IGetterCulturalProfile[], Error> {
		assert(city, 'city is required')

		const profileOrErr =
			await this.culturalProfileRepository.findAllByWhereCity(city)

		if (profileOrErr.isRight())
			return right(new Error('Erro no banco de dados'))

		return profileOrErr
	}
}
