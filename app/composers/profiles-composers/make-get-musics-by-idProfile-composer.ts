import { Controller } from '@/adapters/controller'
import { ControllerGeneric } from '@/adapters/controller/helpers'
import {
  FindAllProductsByCategory
} from '@/domain/usecases'
import { CATEGORIES } from '@/types/constants'

export const makeGetMusicsByIDProfileComposer = (): ControllerGeneric => {
  return new Controller(
    new FindAllProductsByCategory(
      CATEGORIES.AUDIO
    )
  )
}
