import { db } from '@mapa-cultural/database'

import { GetterTVPrograms } from '@/domain/entities/getters/getter-tv-programs'
import { left, PromiseEither } from '@/shared/either'
import { IGetterTVPrograms } from '@/types/getters'

import { UseCase } from '../ports/use-case'

export class FindAllTvProgramsUseCase
	implements UseCase<unknown, IGetterTVPrograms[]>
{
	async execute(
		_,
		{ page = '0', pageSize = '50', playlistId = null }
	): PromiseEither<IGetterTVPrograms[], Error> {
		const where = playlistId ? { playlistId, active: true } : { active: true }

		const size = parseInt(pageSize, 10)

		const offset = parseInt(page) * size
		const limit = size

		const { rows } = await db.ModelProgramsTV.findAndCountAll({
			where,
			limit,
			offset,
			order: [['createdAt', 'ASC']],
		})

		const tvPrograms = await Promise.all([
			...rows.map(async (model) => {
				const tvProgram = model.get()
				return new GetterTVPrograms().build(tvProgram)
			}),
		])

		return left(tvPrograms)
	}
}
