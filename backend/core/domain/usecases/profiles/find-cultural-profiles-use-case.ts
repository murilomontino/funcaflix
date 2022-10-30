import { CulturalProfileRepository } from '@/domain/repositories'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterCulturalProfile } from '@/types/getters'
import assert from 'assert'

import { UseCase } from '../ports/use-case'

type Props = {
  id: number
}

export class FindByIdProfileUseCase
  implements UseCase<unknown, IGetterCulturalProfile>
{
  constructor(private readonly culturalProfileRepository: CulturalProfileRepository) {}

  async execute(_, { id }: Props): PromiseEither<IGetterCulturalProfile, Error> {
    assert(id, 'id is required')

    const profileOrErr = await this.culturalProfileRepository.findById(id)

    if (profileOrErr.isRight()) return right(new Error('Not implemented'))

    return left(profileOrErr.value)
  }
}
