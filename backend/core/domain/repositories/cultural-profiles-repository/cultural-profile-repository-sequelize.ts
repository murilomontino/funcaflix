import { left, PromiseEither } from '@/shared/either'
import { IGetterCulturalProfile } from '@/types/getters'
import { database } from 'mapacultural-database'

import {
  CulturalProfileByCity,
  CulturalProfileRepository,
  CulturalProfileBySegment,
} from './cultural-profile.interface'
import { QUERY_CULTURAL_PROFILE } from './queries'

export class CulturalProfileRepositorySequelize implements CulturalProfileRepository {
  async findAllByCity(): PromiseEither<CulturalProfileByCity[], Error> {
    return database.transaction(async (transaction) => {
      const [culturalProfiles] = await database.query(QUERY_CULTURAL_PROFILE, { transaction })

      const cities = Array.from(
        new Set(culturalProfiles.map((item: IGetterCulturalProfile) => item.segment))
      )

      const items: CulturalProfileByCity[] = await Promise.all(
        cities.map(async (city) => {
          const items = culturalProfiles.filter(
            (item: IGetterCulturalProfile) => item.city === city
          ) as IGetterCulturalProfile[]
          return { city, items }
        })
      )

      return left(items)
    })
  }

  async findAllBySegment(): PromiseEither<CulturalProfileBySegment[], Error> {
    return database.transaction(async (transaction) => {
      const [culturalProfiles] = await database.query(QUERY_CULTURAL_PROFILE, { transaction })

      const segments = Array.from(
        new Set(culturalProfiles.map((item: IGetterCulturalProfile) => item.segment))
      )

      const items = await Promise.all(
        segments
        .map((segment) => {
          const items = culturalProfiles.filter(
            (artist: IGetterCulturalProfile) => artist.segment === segment
          ) as IGetterCulturalProfile[]
          return { segment, items }
        })
      )

      return left(items)
    })
  }
}
