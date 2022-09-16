import { GetterProjects } from '@/domain/entities'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterProjects } from '@/types/getters'

import { db, database } from '../../../../database'
import { UseCase } from '../ports/use-case'

type ID = {
  id: string | number
}

export class FindByPKOpportunities implements UseCase<ID, IGetterProjects> {
  async execute(_, params: ID): PromiseEither<IGetterProjects, Error> {
    if (!params.id) {
      return right(new Error('Id é obrigatório'))
    }
    const id = parseInt(`${params.id}`)

    return await database.transaction(async (transaction) => {
      const opportunity = await db.ModelProject.findByPk(id, {
        transaction,
      })

      if (!opportunity) {
        return right(new Error('Oportunidade não encontrada'))
      }

      const project = GetterProjects.build(opportunity.get())

      const docs = await db.ModelDocProject.findAll({
        where: {
          idProject: project.id,
        },
        transaction,
      })

      project.defineDocs(docs.map((d) => d.get()))

      return left(project.params())
    })
  }
}
