import { CulturalProfileRepository } from '@/domain/repositories'
import { PromiseEither, right } from '@/shared/either'
import { IGetterCulturalProfile } from '@/types/getters'
import assert from 'assert'

import { UseCase } from '../ports/use-case'

type Props = {
  segment: string
}

export class FindAllBySegmentProfileUseCase
  implements UseCase<unknown, IGetterCulturalProfile[]>
{
  constructor(private readonly culturalProfileRepository: CulturalProfileRepository) { }

  async execute(_, { segment }: Props): PromiseEither<IGetterCulturalProfile[], Error> {
    assert(segment, 'segment is required')

    const profileOrErr = await this.culturalProfileRepository.findAllByWhereSegment(segment)

    if (profileOrErr.isRight()) return right(new Error('Erro no banco de dados'))

    return profileOrErr
  }
}
