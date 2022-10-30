import GetterCache from '@/helpers/cache/getter-cache/getter-cache-use-case'
import SetterCache from '@/helpers/cache/setter-cache/setter-cache-use-case'
import promiseErrorHandler from '@/helpers/error-handler'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterCulturalProfile } from '@/types/getters'
import { database } from 'mapacultural-database'

import {
  CulturalProfileByCity,
  CulturalProfileRepository,
  CulturalProfileBySegment,
} from './cultural-profile.interface'
import { 
  QUERY_CULTURAL_PROFILE, 
  QUERY_CULTURAL_PROFILE_BY_ID, 
  QUERY_GROUP_BY_CITY, 
  QUERY_GROUP_BY_SEGMENT, 
  QUERY_CULTURAL_PROFILE_BY_CITY, 
  QUERY_CULTURAL_PROFILE_BY_SEGMENT 
} from './queries'

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

  async findById(id: number): PromiseEither<IGetterCulturalProfile, Error> {
    return database.transaction(async (transaction) => {

      const [error, profiles] = await promiseErrorHandler(
        database.query(QUERY_CULTURAL_PROFILE_BY_ID(id), { transaction }) 
      ) 
            
      if (error) return right(error)
      
      const [profile] = profiles

      if (!profile[0]) return right(new Error('Profile not found'))

      return left(profile[0] as IGetterCulturalProfile)
    })
  }

  async findAllByWhereSegment (segment: string): PromiseEither<IGetterCulturalProfile[], Error> {
    return database.transaction(async (transaction) => {

      const [error, queryResult] = await promiseErrorHandler(
        database.query(QUERY_CULTURAL_PROFILE_BY_SEGMENT(segment), { transaction }) 
      ) 
            
      if (error) return right(error)
      
      const profiles = queryResult[0].map((item: any) => item as IGetterCulturalProfile)

      return left(profiles)
    })
  }

  async findAllByWhereCity (city: string): PromiseEither<IGetterCulturalProfile[], Error> {
    return database.transaction(async (transaction) => {

      const [error, queryResult] = await promiseErrorHandler(
        database.query(QUERY_CULTURAL_PROFILE_BY_CITY(city), { transaction }) 
      ) 
            
      if (error) return right(error)
      
      const profiles = queryResult[0].map((item: any) => item as IGetterCulturalProfile)

      return left(profiles)
    })
  }

  async findGroupByCity (): PromiseEither<string[], Error> {

    const cacheOrErr = await GetterCache.execute('::cities')

    if (cacheOrErr.isLeft()) { 
      return left(JSON.parse(cacheOrErr.value))
    }

    return database.transaction(async (transaction) => {

      const [error, cities] = await promiseErrorHandler(
        database.query(QUERY_GROUP_BY_CITY, { transaction }) 
      ) 
            
      if (error) return right(error)
      const citiesString = cities[0].map((item: any) => item.city)

      await SetterCache.execute('::cities', JSON.stringify(citiesString))

      return left(citiesString)
    })
  }

  async findGroupBySegment (): PromiseEither<string[], Error> {
    const cacheOrErr = await GetterCache.execute('::segments')

    if (cacheOrErr.isLeft()) { 
      return left(JSON.parse(cacheOrErr.value))
    }

    return database.transaction(async (transaction) => {

      const [error, segments] = await promiseErrorHandler(
        database.query(QUERY_GROUP_BY_SEGMENT, { transaction }) 
      ) 
            
      if (error) return right(error)
      
      const segmentsString = segments[0].map((item: any) => item.segment)

      await SetterCache.execute('::segments', JSON.stringify(segmentsString))

      return left(segmentsString)
    })
  }
}
