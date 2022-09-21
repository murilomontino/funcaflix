/* eslint-disable no-unused-vars */

import { GetterEntity } from '@/domain/entities/getters/getter-entity'
import { left, PromiseEither, right } from '@/shared/either'
import { database } from 'mapacultural-database'
import { ModelCtor, Model } from 'sequelize-typescript'

import { InsertRepository } from '../interfaces/insert-repository'
import { Options } from '../interfaces/options'

export class SequelizeInsert<ModelEntity, Setter, Getter extends Setter>
  implements InsertRepository<ModelEntity, Setter, Getter>
{
  constructor(
    private readonly Model: ModelCtor<Model<ModelEntity>>,
    private readonly EntityGetter: GetterEntity<Getter>
  ) {}

  async run(
    params: Partial<Setter>,
    options?: Options
  ): PromiseEither<GetterEntity<Getter>, Error> {
    try {
      return await database.transaction(async (transaction) => {
        const buildEntity = this.Model.build(params as any)

        const entity = await buildEntity.save({
          transaction: options?.transaction || transaction,
        })

        const getter = this.EntityGetter.build({
          ...(entity.get({ plain: true }) as unknown as Getter),
          id: entity.id,
        })

        return left(getter)
      })
    } catch (error) {
      return right(error)
    }
  }
}
