import { PromiseEither } from '@/shared/either'
import { IGetterCulturalProfile } from '@/types/getters'

export type CulturalProfileByCity = {
  city: string
  items: IGetterCulturalProfile[]
}

export interface CulturalProfileRepository {
  findAllByCity(): PromiseEither<CulturalProfileByCity[], Error>
}
