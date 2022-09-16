import { GetterProjects } from '@/domain/entities'
import { left, PromiseEither } from '@/shared/either'
import { IGetterProjects } from '@/types/getters'

import { db, database } from '../../../../database'
import { UseCase } from '../ports/use-case'

export class FindAllOpportunities implements UseCase<unknown, IGetterProjects[]> {
  async execute(): PromiseEither<IGetterProjects[], Error> {
    return await database.transaction(async (transaction) => {
      const newestProjects = await db.ModelProject.findAll({
        where: {
          status: [1, 2],
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

          project.defineDocs(docs.map((d) => d.get()))

          return project.params()
        })
      )

      return left(mapProjects)
    })
  }
}
