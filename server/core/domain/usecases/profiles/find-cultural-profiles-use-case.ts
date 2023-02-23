import { CulturalProfileRepository } from '@/domain/repositories'
import { Transform } from '@/helpers/decorators/transform'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterCulturalProfile } from '@/types/getters'

import { MissingParamError } from '../errors'
import { UseCase } from '../ports/use-case'

type Props = {
	id: number
}

export class FindByIdProfileUseCase
	implements UseCase<unknown, IGetterCulturalProfile>
{
	constructor(
		private readonly culturalProfileRepository: CulturalProfileRepository
	) { }

	@Transform(Number, ['id'])
	async execute(
		_,
		{ id }: Props
	): PromiseEither<IGetterCulturalProfile, Error> {
		if (!id) return right(new MissingParamError({ parameter: 'id' }))

		const profileOrErr = await this.culturalProfileRepository.findById(id)

		if (profileOrErr.isRight()) return right(profileOrErr.extract())

		return left(profileOrErr.value)
	}
}
