/* 
SELECT `playlist_id`, count(*), MAX(`data_de_publicacao`) FROM `programas_de_tv`
GROUP BY `playlist_id`  
ORDER BY `MAX(``data_de_publicacao``)`  DESC
*/

import { GetterPlaylistTVPrograms } from '@/domain/entities'
import { left, PromiseEither } from '@/shared/either'

import { database, db } from '../../../../database'
import { UseCase } from '../ports/use-case'

type QueryParams = {
  playlistId: string
  productId: number
  total: number
  publishedAt: string
}

export class FindAllPlaylistTVProgramsUseCase
  implements UseCase<unknown, GetterPlaylistTVPrograms[]>
{
  async execute(): PromiseEither<GetterPlaylistTVPrograms[], Error> {
    return await database.transaction(async (transaction) => {
      const productsModel = await db.ModelInfoProducts.findAll({
        where: {
          category: 152,
        },
        attributes: ['id', 'title', 'about', 'thumbnail', 'category'],
        transaction,
      })
      const [modelsProducts] = await database.query(
        `
      SELECT 
        produto_id as productId, 
        playlist_id as playlistId, 
        count(*) as total, 
        MAX(data_de_publicacao) as publishedAt 
      FROM 
        programas_de_tv
          GROUP BY playlist_id  
          ORDER BY MAX(data_de_publicacao)  DESC
    `,
        {
          transaction,
        }
      )

      const tvPrograms = await Promise.all([
        ...productsModel
          .map((model) => {
            const product = model.get({ plain: true })

            const program = modelsProducts.find(
              (model: QueryParams) => model.productId === product.id
            ) as QueryParams

            return new GetterPlaylistTVPrograms()
              .build({
                id: product.id,
                title: product.title,
                description: product.about,
                thumbnail: product.thumbnail,
                publishedAt: program?.publishedAt || null,
                count: program?.total || 0,
                playlistId: program?.playlistId || null,
              })
              .params()
          })
          .filter((tvProgram) => tvProgram.count > 0),
      ])

      return left(tvPrograms)
    })
  }
}
