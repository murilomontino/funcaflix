import { left, PromiseEither } from '@/shared/either'
import { IGetterCulturalProfile } from '@/types/getters'
import { ICulturalProfile } from '@/types/setters'
import { faker } from '@faker-js/faker'

import {
  CityOrSegmentNameResponse,
  CulturalProfileByCity,
  CulturalProfileBySegment,
  CulturalProfileRepository,
} from './cultural-profile.interface'

export class InMemoryCulturalProfileRepository implements CulturalProfileRepository {
  async findRandom(length: number): PromiseEither<ICulturalProfile[], Error> {
    throw new Error('Method not implemented.')
  }
  async findSearch(search: string): PromiseEither<ICulturalProfile[], Error> {
    throw new Error('Method not implemented.')
  }
  private props = { items: [] as IGetterCulturalProfile[] }

  async findById(id: number): PromiseEither<ICulturalProfile, Error> {
    throw new Error('Method not implemented.')
  }

  async findAllByWhereSegment(segment: string): PromiseEither<ICulturalProfile[], Error> {
    throw new Error('Method not implemented.')
  }

  async findAllByWhereCity(city: string): PromiseEither<ICulturalProfile[], Error> {
    throw new Error('Method not implemented.')
  }

  async findGroupByCity(): PromiseEither<string[], Error> {
    throw new Error('Method not implemented.')
  }

  async findGroupBySegment(): PromiseEither<string[], Error> {
    throw new Error('Method not implemented.')
  }

  async findCityOrSegmentName(name: string): PromiseEither<CityOrSegmentNameResponse, Error> {
    throw new Error('Method not implemented.')
  }

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
        banner: faker.image.imageUrl(null, null, null, true),
        hashtags: '#hashtag',
        uf: faker.address.stateAbbr(),
        [type]: by,
      } as IGetterCulturalProfile)
    )
  }

  get items(): IGetterCulturalProfile[] {
    return this.props.items
  }
}
