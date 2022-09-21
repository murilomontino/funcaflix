import { database } from '@/database'
import { left, PromiseEither } from '@/shared/either'
import { IGetterCulturalProfile } from '@/types/getters'

import {
  CulturalProfileByCity,
  CulturalProfileRepository,
  CulturalProfileBySegment,
} from './cultural-profile.interface'
import { QUERY_CULTURAL_PROFILE } from './queries'

export class CulturalProfileRepositorySequelize implements CulturalProfileRepository {
  async findAllByCity(): PromiseEither<CulturalProfileByCity[], Error> {
    return database.transaction(async (transaction) => {
      const [culturalProfiles] = await database.query<IGetterCulturalProfile>(
        QUERY_CULTURAL_PROFILE,
        { transaction }
      )

      const cities = Array.from(new Set(culturalProfiles.map((item) => item.segment)))

      const items: CulturalProfileByCity[] = await Promise.all(
        cities.map(async (city) => {
          const items = culturalProfiles.filter((item) => item.city === city)
          return { city, items }
        })
      )

      return left(items)
    })
  }

  async findAllBySegment(): PromiseEither<CulturalProfileBySegment[], Error> {
    return database.transaction(async (transaction) => {
      const [culturalProfiles] = await database.query<IGetterCulturalProfile>(
        QUERY_CULTURAL_PROFILE,
        { transaction }
      )

      const segments = Array.from(new Set(culturalProfiles.map((item) => item.segment)))

      const items: CulturalProfileBySegment[] = await Promise.all(
        segments.map(async (segment) => {
          const items = culturalProfiles.filter((item) => item.segment === segment)
          return { segment, items }
        })
      )

      return left(items)
    })
  }
}
