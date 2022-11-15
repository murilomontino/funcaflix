import { CulturalProfileRepository } from '@/domain/repositories'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterCulturalProfile } from '@/types/getters'

import { UseCase } from '../ports/use-case'

type FindCulturalProfilesProps = {
  length?: number
} | undefined | null

export class FindByRandomProfileUseCase
  implements UseCase<FindCulturalProfilesProps, IGetterCulturalProfile[]>
{
  constructor(private readonly culturalProfileRepository: CulturalProfileRepository) { }

  async execute({ length }: FindCulturalProfilesProps): PromiseEither<IGetterCulturalProfile[], Error> {

    const profilesRandomOrErr = await this.culturalProfileRepository.findRandom(length)

    if (profilesRandomOrErr.isRight()) return right(new Error('Erro no banco de dados: Não foi possível buscar aleatoriamente'))

    const profilesRandom = profilesRandomOrErr.extract()

    return left(profilesRandom)
  }
}
