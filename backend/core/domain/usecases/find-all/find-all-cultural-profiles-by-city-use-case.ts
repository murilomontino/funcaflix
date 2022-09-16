import { CulturalProfileByCity, CulturalProfileRepository } from '@/domain/repositories'
import { left, PromiseEither, right } from '@/shared/either'

import { UseCase } from '../ports/use-case'

export class FindAllCulturalProfilesByCityUseCase
  implements UseCase<unknown, CulturalProfileByCity[]>
{
  constructor(private readonly culturalProfileRepository: CulturalProfileRepository) {}

  async execute(): PromiseEither<CulturalProfileByCity[], Error> {
    const profilesOrErr = await this.culturalProfileRepository.findAllByCity()

    if (profilesOrErr.isRight()) return right(new Error('Not implemented'))

    return left(profilesOrErr.value)
  }
}
