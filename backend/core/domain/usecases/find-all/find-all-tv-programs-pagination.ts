import { GetterTVPrograms } from '@/domain/entities/getters/getter-tv-programs'
import { left, PromiseEither } from '@/shared/either'

import { db } from '../../../../database'
import { UseCase } from '../ports/use-case'

export class FindAllTvProgramsUseCase implements UseCase<unknown, GetterTVPrograms[]> {
  async execute(
    _,
    { page = '0', pageSize = '50', playlistId = null }
  ): PromiseEither<GetterTVPrograms[], Error> {
    const where = playlistId ? { playlistId, active: true } : { active: true }

    const size = parseInt(pageSize, 10)

    const offset = parseInt(page) * size
    const limit = size

    const { rows } = await db.ModelProgramsTV.findAndCountAll({
      where,
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
