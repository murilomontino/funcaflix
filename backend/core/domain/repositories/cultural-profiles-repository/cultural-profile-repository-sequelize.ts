import GetterCache from '@/helpers/cache/getter-cache/getter-cache-use-case'
import SetterCache from '@/helpers/cache/setter-cache/setter-cache-use-case'
import promiseErrorHandler from '@/helpers/error-handler'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterCulturalProfile } from '@/types/getters'
import { ICulturalProfile } from '@/types/setters'
import { database } from 'mapacultural-database'

import segmentos from '../../constants/segmentos.json'
import localidades from '../../constants/localidades.json'

import {
  CulturalProfileByCity,
  CulturalProfileBySegment,
  CulturalProfileRepository,
  CityOrSegmentNameResponse
} from './cultural-profile.interface'

import {
  QUERY_CULTURAL_PROFILE,
  QUERY_CULTURAL_PROFILE_BY_CITY,
  QUERY_CULTURAL_PROFILE_BY_ID,
  QUERY_CULTURAL_PROFILE_BY_SEGMENT,
  QUERY_GROUP_BY_CITY,
  QUERY_GROUP_BY_SEGMENT,
  QUERY_CULTURAL_PROFILE_RAND,
  QUERY_CULTURAL_PROFILE_SEARCH

} from './queries'

const HOUR = 3600
const DAY = HOUR * 24

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

  async findAllByWhereSegment(segment: string): PromiseEither<IGetterCulturalProfile[], Error> {

    const KEY = `::profiles::${segment}`

    const cacheOrErr = await GetterCache.execute(KEY)

    if (cacheOrErr.isLeft()) {
      return left(JSON.parse(cacheOrErr.value))
    }

    const term = segmentos[segment]

    return database.transaction(async (transaction) => {

      const [error, queryResult] = await promiseErrorHandler(
        database.query(QUERY_CULTURAL_PROFILE_BY_SEGMENT(term), { transaction })
      )

      if (error) return right(error)

      const profiles = queryResult[0].map((item: any) => item as IGetterCulturalProfile)

      await SetterCache.execute(KEY, JSON.stringify(profiles), HOUR)

      return left(profiles)
    })
  }

  async findAllByWhereCity(city: string): PromiseEither<IGetterCulturalProfile[], Error> {

    const KEY = `::profiles::${city}`

    const cacheOrErr = await GetterCache.execute(KEY)

    if (cacheOrErr.isLeft()) {
      return left(JSON.parse(cacheOrErr.value))
    }

    const term = localidades[city]

    return database.transaction(async (transaction) => {

      const [error, queryResult] = await promiseErrorHandler(
        database.query(QUERY_CULTURAL_PROFILE_BY_CITY(term), { transaction })
      )

      if (error) return right(error)

      const profiles = queryResult[0].map((item: any) => item as IGetterCulturalProfile)

      await SetterCache.execute(KEY, JSON.stringify(profiles), HOUR)

      return left(profiles)
    })
  }

  async findGroupByCity(): PromiseEither<string[], Error> {

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

  async findGroupBySegment(): PromiseEither<string[], Error> {
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

  private async generateCache(): PromiseEither<string, Error> {
    return database.transaction(async (transaction) => {

      const [citiesAndOptions, segmentAndOptions] = await Promise.all([
        database.query(QUERY_GROUP_BY_CITY, { transaction }),
        database.query(QUERY_GROUP_BY_SEGMENT, { transaction })
      ])

      const segments = segmentAndOptions[0].map((item: any) => item.segment as string)

      const cities = citiesAndOptions[0].map((item: any) => item.city as string)

      await SetterCache.execute('::cities', JSON.stringify(cities))
      await SetterCache.execute('::segments', JSON.stringify(segments))

      return left('Cache generated')
    })
  }

  async findCityOrSegmentName(name: string): PromiseEither<CityOrSegmentNameResponse, Error> {

    const [segmentFound, cityFound] = [
      segmentos[name],
      localidades[name]
    ]

    if (segmentFound) return left({
      name: segmentFound,
      type: 'segment'
    })
    if (cityFound) return left({
      name: cityFound,
      type: 'city'
    })

    return right(new Error('Not found'))

  }

  async findRandom(length = 20): PromiseEither<ICulturalProfile[], Error> {

    const cacheOrErr = await GetterCache.execute('::random-profile-culture-home')

    if (cacheOrErr.isLeft()) {
      return left(JSON.parse(cacheOrErr.value))
    }

    return database.transaction(async (transaction) => {

      const [error, profiles] = await promiseErrorHandler(
        database.query(QUERY_CULTURAL_PROFILE_RAND(length), { transaction })
      )

      if (error) return right(error)

      const profilesArray = profiles[0].map((item: any) => item as ICulturalProfile)

      await SetterCache.execute('::random-profile-culture-home', JSON.stringify(profilesArray), DAY)

      return left(profilesArray)
    })
  }

  async findSearch(search: string): PromiseEither<ICulturalProfile[], Error> {

    const cacheOrErr = await GetterCache.execute(`::search-profile-culture-home::${search}`)

    if (cacheOrErr.isLeft()) {
      return left(JSON.parse(cacheOrErr.value))
    }

    return database.transaction(async (transaction) => {

      const [error, profiles] = await promiseErrorHandler(
        database
          .query(QUERY_CULTURAL_PROFILE_SEARCH(search), { transaction })
      )

      if (error) return right(error)

      const profilesArray = profiles[0].map((item: any) => item as ICulturalProfile)

      await SetterCache.execute(`::search-profile-culture-home::${search}`, JSON.stringify(profilesArray), DAY)

      return left(profilesArray)
    })
  }
}

