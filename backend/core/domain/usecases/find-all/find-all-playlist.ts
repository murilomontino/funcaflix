/* 
SELECT `playlist_id`, count(*), MAX(`data_de_publicacao`) FROM `programas_de_tv`
GROUP BY `playlist_id`  
ORDER BY `MAX(``data_de_publicacao``)`  DESC
*/

import { GetterPlaylistTVPrograms } from '@/domain/entities'
import { left, PromiseEither } from '@/shared/either'
import { database, db } from 'mapacultural-database'

import { UseCase } from '../ports/use-case'

type QueryParams = {
  playlistId: string
  productId: number
  total: number
  publishedAt: string
}

type Props = {
  category?: string | string[]
}

const arrayNumberForArrayString = (arrayString: string | string[]) => {
  const paramsArray = Array.isArray(arrayString) ? arrayString : [arrayString]
  return paramsArray.map((category) => parseInt(category, 10))
}

export class FindAllPlaylistUseCase implements UseCase<unknown, GetterPlaylistTVPrograms[]> {
  async execute({ category = ['152'] }: Props): PromiseEither<GetterPlaylistTVPrograms[], Error> {
    return await database.transaction(async (transaction) => {
      const categoriesNumber = arrayNumberForArrayString(category)

      const productsModel = await db.ModelInfoProducts.findAll({
        where: {
          category: categoriesNumber
        },
        attributes: ['id', 'title', 'about', 'thumbnail', 'category'],
        transaction,
      })
      const [rows] = await database.query(
        `
      SELECT 
        produto_id as productId, 
        playlist_id as playlistId, 
        count(*) as total, 
        MAX(data_de_publicacao) as publishedAt 
      FROM 
        audiovisual
          GROUP BY playlist_id  
          ORDER BY MAX(data_de_publicacao)  DESC
    `,
        {
          transaction,
        }
      )

      const audioVisual = await Promise.all([
        ...productsModel
          .map((model) => {
            const product = model.get({ plain: true })

            const row = rows.find(
              (model: QueryParams) => model.productId === product.id
            ) as QueryParams

            return new GetterPlaylistTVPrograms()
              .build({
                id: product.id,
                title: product.title,
                description: product.about,
                thumbnail: product.thumbnail,
                publishedAt: row?.publishedAt || null,
                count: row?.total || 0,
                playlistId: row?.playlistId || null,
              })
              .params()
          })
          .filter((tvProgram) => tvProgram.count > 0),
      ])

      return left(audioVisual)
    })
  }
}
