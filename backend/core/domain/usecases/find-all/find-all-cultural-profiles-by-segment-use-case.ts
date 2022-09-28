import { CulturalProfileBySegment, CulturalProfileRepository } from '@/domain/repositories'
import { left, PromiseEither, right } from '@/shared/either'

import { UseCase } from '../ports/use-case'

export class FindAllCulturalProfilesBySegmentUseCase
  implements UseCase<unknown, CulturalProfileBySegment[]>
{
  constructor(private readonly culturalProfileRepository: CulturalProfileRepository) {}

  async execute(): PromiseEither<CulturalProfileBySegment[], Error> {
    const profilesOrErr = await this.culturalProfileRepository.findAllBySegment()

    if (profilesOrErr.isRight()) return right(new Error('Not implemented'))

    return left(profilesOrErr.value)
  }
}
