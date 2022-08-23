import { left, PromiseEither, right } from '@/shared/either'
import { IGetterTVPrograms } from '@/types/getters'
import { Op } from 'sequelize'

import { db, database } from '../../../../database'
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

export class FindAllNewestAudioVisual implements UseCase<unknown, IGetterTVPrograms[]> {
  async execute(_, params: Params): PromiseEither<IGetterTVPrograms[], Error> {
    if (!params.category) {
      return right(new Error('Categoria é obrigatório'))
    }

    const mapConfig = new Map()
    params.limit && mapConfig.set('limit', params.limit)

    const categoryArrayString = Array.isArray(params.category) ? params.category : [params.category]
    const categoryArrayInt = categoryArrayString.map((category) => parseInt(category, 10))

    const isInArray = Object.values(ProductType).some((type) =>
      categoryArrayInt.includes(parseInt(type.toString(), 10))
    )

    // id deve ser um ProductType
    if (!isInArray) {
      return right(new Error('Id deve ser uma categoria válida'))
    }

    return await database.transaction(async (transaction) => {
      const modelsPlaylist = await db.ModelInfoProducts.findAll({
        where: {
          [Op.or]: [
            ...categoryArrayInt.map((category) => ({
              category: category,
            })),
          ],
          active: true,
        },
        ...Object.fromEntries(mapConfig),
        order: [['createdAt', 'DESC']],
        attributes: ['id', 'title', 'about', 'thumbnail', 'category', 'createdAt'],
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
