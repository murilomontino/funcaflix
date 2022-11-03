import { CulturalProfileRepository } from '@/domain/repositories'
import removeAccentsAndJoin from '@/helpers/strings-normalize'
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
  constructor(private readonly culturalProfileRepository: CulturalProfileRepository) { }

  async execute(_, { city }: Props): PromiseEither<IGetterCulturalProfile[], Error> {
    assert(city, 'city is required')

    const cities = await this.culturalProfileRepository.findGroupByCity()

    if (cities.isRight()) return right(new Error('Erro no banco de dados: Não foi possível buscar as cidades'))

    const cityFound = cities.value.find((item) =>
      removeAccentsAndJoin(item) === removeAccentsAndJoin(city)
    )

    if (!cityFound) return right(new Error('Cidade não encontrada'))

    const profileOrErr = await this.culturalProfileRepository.findAllByWhereCity(cityFound)

    if (profileOrErr.isRight()) return right(new Error('Erro no banco de dados'))

    return profileOrErr
  }
}
