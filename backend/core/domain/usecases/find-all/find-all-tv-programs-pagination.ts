import { GetterTVPrograms } from '@/domain/entities/getters/getter-tv-programs'
import { left, PromiseEither } from '@/shared/either'
import { Op } from 'sequelize'

import { db } from '../../../../database'
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
  async execute(
    { subCategory = ['152'], isNecessarySubCategory = true }: Props,
    { page = '0', pageSize = '50', playlistId = null, idProduct = null }
  ): PromiseEither<GetterTVPrograms[], Error> {
    const whereMaps = new Map()

    const subCategoryNumber = arrayNumberForArrayString(subCategory)

    playlistId && whereMaps.set('playlistId', playlistId)
    idProduct && whereMaps.set('idProduct', idProduct)

    isNecessarySubCategory &&
      whereMaps.set('subCategory', {
        [Op.in]: subCategoryNumber,
      })
    const size = parseInt(pageSize, 10)

    const offset = parseInt(page) * size
    const limit = size

    const { rows } = await db.ModelAudioVisual.findAndCountAll({
      where: {
        ...Object.fromEntries(whereMaps),
        active: true,
      },
      limit,
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
