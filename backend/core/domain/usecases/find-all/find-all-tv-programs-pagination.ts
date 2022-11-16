import { GetterTVPrograms } from '@/domain/entities/getters/getter-tv-programs'
import { left, PromiseEither } from '@/shared/either'
import { db } from 'mapacultural-database'
import { Op } from 'sequelize'

import { UseCase } from '../ports/use-case'

type Props = {
  subCategory?: string | string[]
  isNecessarySubCategory?: boolean
}

const arrayNumberForArrayString = (arrayString: string | string[]) => {
  const paramsArray = Array.isArray(arrayString) ? arrayString : [arrayString]
  return paramsArray.map((category) => parseInt(category, 10))
}

export class FindAllTvProgramsUseCase implements UseCase<unknown, GetterTVPrograms[]> {

  async config(params) {
    const map = new Map()
    params.playlistId && map.set('playlistId', params.playlistId)
    params.idProduct && map.set('idProduct', params.idProduct)
    params.isNecessarySubCategory && map.set('subCategory', { [Op.in]: params.subCategoryNumber })
    return map
  }

  async execute(
    { subCategory = ['152'], isNecessarySubCategory = true }: Props,
    { page = '0', pageSize = '50', playlistId = null, idProduct = null }
  ): PromiseEither<GetterTVPrograms[], Error> {

    const subCategoryNumber = arrayNumberForArrayString(subCategory)
    const mapConfig = await this.config({ playlistId, idProduct, isNecessarySubCategory, subCategoryNumber })

    const size = parseInt(pageSize, 10)
    const offset = parseInt(page) * size

    const { rows } = await db.ModelAudioVisual.findAndCountAll({
      where: {
        ...Object.fromEntries(mapConfig),
        active: true,
      },
      limit: size,
      offset,
      order: [['publishedAt', 'DESC']],
    })

    const tvPrograms = await Promise.all([
      ...rows.map(async (model) => {
        const tvProgram = model.get()
        return new GetterTVPrograms().build(tvProgram).params()
      }),
    ])

    return left(tvPrograms)
  }
}
