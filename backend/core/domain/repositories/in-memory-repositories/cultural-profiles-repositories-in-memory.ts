import { left, PromiseEither } from '@/shared/either'
import { IGetterCulturalProfile } from '@/types/getters'
import { faker } from '@faker-js/faker'

import {
  CulturalProfileByCity,
  CulturalProfileRepository,
} from '../cultural-profiles-repository/cultural-profile.interface'

export class CulturalProfileRepositoryInMemory implements CulturalProfileRepository {
  private props = { items: [] as IGetterCulturalProfile[] }

  async findAllByCity(): PromiseEither<CulturalProfileByCity[], Error> {
    const cities = Array.from({ length: 3 }).map(() => faker.address.city())

    const items: CulturalProfileByCity[] = await Promise.all(
      cities.map(async (city) => {
        const items = await this.generateElementsByCity(city)
        return { city, items }
      })
    )

    return left(items)
  }

  private async generateElementsByCity(city: string) {
    return Array.from({ length: parseInt(faker.random.numeric(1)) }).map(
      () =>
        ({
          city,
          about: faker.lorem.paragraph(),
          thumbnail: faker.image.imageUrl(),
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
          createdAt: faker.date.past().toISOString(),
          updatedAt: faker.date.past().toISOString(),
          document: faker.random.word(),
          email: faker.internet.email(),
          phone: faker.phone.number(),
          id: faker.datatype.uuid(),
          idUser: faker.datatype.uuid(),
          mediaSocial: [],
        } as unknown as IGetterCulturalProfile)
    )
  }

  get items(): IGetterCulturalProfile[] {
    return this.props.items
  }
}
