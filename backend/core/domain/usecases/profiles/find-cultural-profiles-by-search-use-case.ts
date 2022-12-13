import { CulturalProfileRepository } from '@/domain/repositories'
import { PromiseEither, right } from '@/shared/either'
import { IGetterCulturalProfile } from '@/types/getters'
import assert from 'assert'

import { UseCase } from '../ports/use-case'

type Props = {
  search: string
}

export class FindAllBySearchProfileUseCase
  implements UseCase<unknown, IGetterCulturalProfile[]>
{
  constructor(private readonly culturalProfileRepository: CulturalProfileRepository) { }

  async execute(_, { search }: Props): PromiseEither<IGetterCulturalProfile[], Error> {
    assert(search, 'search is required')

    const profileSearch = await this.culturalProfileRepository.findSearch(search)

    if (profileSearch.isRight()) return right(new Error('Erro no banco de dados: Não foi possível buscar os nomes'))

    return profileSearch
  }
}
