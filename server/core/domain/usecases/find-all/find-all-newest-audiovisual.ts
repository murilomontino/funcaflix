import { left, PromiseEither, right } from '@/shared/either'
import { IGetterTVPrograms } from '@/types/getters'
import { db, database } from 'mapacultural-database'
import { Op } from 'sequelize'

import { UseCase } from '../ports/use-case'

enum ProductType {
	AudioVisual = 1,
	Livro = 2,
	Audio = 3,
	Evento = 4,
	Exposicao = 5,
}

type Params = {
	category: string | string[]
	limit?: number
}

export class FindAllNewestAudioVisual
	implements UseCase<unknown, IGetterTVPrograms[]>
{
	async configMapAttributes(params: Params): Promise<Map<string, unknown>> {
		const config = new Map()
		params.limit && config.set('limit', params.limit)

		return config
	}

	async convertArrayStringToNumber(
		arrayString: string[] | string
	): Promise<number[]> {
		const arrayAux = Array.isArray(arrayString) ? arrayString : [arrayString]

		const arrayNumber: number[] = []
		arrayAux.forEach((item) => {
			arrayNumber.push(parseInt(item.toString(), 10))
		})
		return arrayNumber
	}

	// um array está contido em outro array - return true or false
	isSubset = (arr1: number[], arr2: number[]) =>
		arr1.some((val) => arr2.includes(val))

	async execute(_, params: Params): PromiseEither<IGetterTVPrograms[], Error> {
		if (!params.category) {
			return right(new Error('Categoria é obrigatório'))
		}

		const config = await this.configMapAttributes(params)
		const categoryArrayInt = await this.convertArrayStringToNumber(
			params.category
		)
		const isInArray = this.isSubset(categoryArrayInt, [
			...Object.values(ProductType),
		] as number[])

		if (!isInArray) return right(new Error('Deve ser uma categoria válida'))

		return await database.transaction(async (transaction) => {
			const modelsPlaylist = await db.ModelInfoProducts.findAll({
				where: {
					[Op.or]: [{ id: 1008 }, { id: 1011 }, { id: 1020 }],
					active: true,
				},
				...Object.fromEntries(config),
				order: [['createdAt', 'DESC']],
				attributes: [
					'id',
					'title',
					'about',
					'thumbnail',
					'category',
					'createdAt',
				],
				transaction,
			})

			const playlist = await Promise.all([
				...modelsPlaylist.map(async (model) => {
					const product = model.get({ plain: true })

					const audioVisualModel = await db.ModelAudioVisual.findOne({
						where: {
							id: product.id,
							active: true,
						},
						transaction,
						order: [['publishedAt', 'DESC']],
					})

					const audioVisual = audioVisualModel.get({ plain: true })

					return {
						id: audioVisual.id,
						title: audioVisual.title,
						description: audioVisual.description,
						thumbnail: audioVisual.thumbnail,
						category: product.category,
						publishedAt: audioVisual.publishedAt,
						videoId: audioVisual.videoId,
						idProduct: audioVisual.idProduct,
						playlistId: audioVisual.playlistId,
						subCategory: audioVisual.subCategory,
					} as IGetterTVPrograms
				}),
			])

			return left(playlist)
		})
	}
}
