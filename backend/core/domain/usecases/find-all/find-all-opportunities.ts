import { GetterProjects } from '@/domain/entities'
import { left, PromiseEither } from '@/shared/either'
import { IGetterProjects } from '@/types/getters'
import { db, database } from 'mapacultural-database'

import { UseCase } from '../ports/use-case'

type WhereProps = {
  [key: string]: unknown
}

type FindAllOpportunitiesProps = {
  status?: number[]
  params?: {
    where?: WhereProps
    [key: string]: unknown
  }
}

export class FindAllOpportunities implements UseCase<unknown, IGetterProjects[]> {
  async configWhere(params: WhereProps) {
    const mapWhere = new Map()
    Object.keys(params).map((key) => {
      if (!!params[key]) {
        mapWhere.set(key, params[key])
      }
    })

    return mapWhere
  }

  async execute({ status = [1, 2], params }: FindAllOpportunitiesProps): PromiseEither<IGetterProjects[], Error> {
    return await database.transaction(async (transaction) => {

      const mapWhere = await this.configWhere(params?.where || {})

      const newestProjects = await db.ModelProject.findAll({
        where: {
          status: status || [1, 2],
          ...Object.fromEntries(mapWhere),
        },

        order: [['status', 'DESC']],
        transaction,
      })

      const mapProjects = await Promise.all(
        newestProjects.map(async (p) => {
          const project = GetterProjects.build(p.get())
          const docs = await db.ModelDocProject.findAll({
            where: {
              idProject: project.id,
            },
            transaction,
          })


          const docsFormatted = docs.map((d) => d.get())
          project.defineDocs(docsFormatted)

          const banner = docsFormatted.find(doc => {
            if (doc.type === 11) {
              return doc.file
            }
          })

          const photoProfile = docsFormatted.find(doc => {
            if (doc.type === 10) {
              return doc.file
            }
          })

          const thumbnail = banner?.file || photoProfile?.file || ''


          project.defineThumbnail(thumbnail)

          return project.params()
        })
      )

      return left(mapProjects)
    })
  }
}
