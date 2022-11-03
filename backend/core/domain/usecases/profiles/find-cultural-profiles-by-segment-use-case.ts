import { CulturalProfileRepository } from '@/domain/repositories'
import removeAccentsAndJoin from '@/helpers/strings-normalize'
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
  constructor(private readonly culturalProfileRepository: CulturalProfileRepository) {}

  async execute(_, { segment }: Props): PromiseEither<IGetterCulturalProfile[], Error> {
    assert(segment, 'segment is required')

    const segments = await this.culturalProfileRepository.findGroupBySegment()

    if (segments.isRight()) return right(new Error('Erro no banco de dados: Não foi possível buscar os segmentos'))

    const segmentFound = segments.value.find((item) => removeAccentsAndJoin(item) === removeAccentsAndJoin(segment))

    if (!segmentFound) return right(new Error('Segmento não encontrado'))

    const profileOrErr = await this.culturalProfileRepository.findAllByWhereSegment(segmentFound)

    if (profileOrErr.isRight()) return right(new Error('Erro no banco de dados'))

    return profileOrErr
  }
}
