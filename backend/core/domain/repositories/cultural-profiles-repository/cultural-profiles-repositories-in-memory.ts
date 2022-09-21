import { left, PromiseEither } from '@/shared/either'
import { IGetterCulturalProfile } from '@/types/getters'
import { faker } from '@faker-js/faker'

import {
  CulturalProfileByCity,
  CulturalProfileBySegment,
  CulturalProfileRepository,
} from '../cultural-profiles-repository/cultural-profile.interface'

export class CulturalProfileRepositoryInMemory implements CulturalProfileRepository {
  private props = { items: [] as IGetterCulturalProfile[] }

  async findAllByCity(): PromiseEither<CulturalProfileByCity[], Error> {
    const cities = Array.from({ length: 3 }).map(() => faker.address.city())

    const items: CulturalProfileByCity[] = await Promise.all(
      cities.map(async (city) => {
        const items = await this.generateElements(city, 'city')
        return { city, items }
      })
    )

    return left(items)
  }

  async findAllBySegment(): PromiseEither<CulturalProfileBySegment[], Error> {
    const segments = Array.from({ length: 3 }).map(() => faker.name.jobArea())
    const items: CulturalProfileBySegment[] = await Promise.all(
      segments.map(async (segment) => {
        const items = await this.generateElements(segment, 'segment')
        return { segment, items }
      })
    )

    return left(items)
  }

  private async generateElements(by: string, type: 'city' | 'segment') {
    return Array.from({ length: parseInt(faker.random.numeric(1)) }).map(
      () =>
        ({
          about: faker.lorem.paragraph(),
          thumbnail: faker.image.imageUrl(null, null, null, true),
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
          email: faker.internet.email(),
          phone: faker.phone.number(),
          id: faker.datatype.uuid(),
          acting: faker.name.jobType(),
          facebook: faker.internet.url(),
          instagram: faker.internet.url(),
          segment: faker.name.jobArea(),
          twitter: faker.internet.url(),
          type: faker.name.jobType(),
          website: faker.internet.url(),
          youtube: faker.internet.url(),
          city: faker.address.city(),
          [type]: by,
        } as IGetterCulturalProfile)
    )
  }

  get items(): IGetterCulturalProfile[] {
    return this.props.items
  }
}
