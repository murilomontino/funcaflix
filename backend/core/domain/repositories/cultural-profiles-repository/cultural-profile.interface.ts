import { PromiseEither } from '@/shared/either'
import { IGetterCulturalProfile } from '@/types/getters'

export type CulturalProfileByCity = {
  city: string
  items: IGetterCulturalProfile[]
}

export type CulturalProfileBySegment = {
  segment: string
  items: IGetterCulturalProfile[]
}

export type CityOrSegmentNameResponse = {
  name: string, type: 'segment' | 'city'
}

export interface CulturalProfileRepository {
  findAllByCity(): PromiseEither<CulturalProfileByCity[], Error>
  findAllBySegment(): PromiseEither<CulturalProfileBySegment[], Error>
  findById(id: number): PromiseEither<IGetterCulturalProfile, Error>
  findAllByWhereSegment(segment: string): PromiseEither<IGetterCulturalProfile[], Error>
  findAllByWhereCity(city: string): PromiseEither<IGetterCulturalProfile[], Error>
  findGroupByCity(): PromiseEither<string[], Error>
  findGroupBySegment(): PromiseEither<string[], Error>
  findCityOrSegmentName(name: string): PromiseEither<CityOrSegmentNameResponse, Error>
}
