import { left, PromiseEither } from '@/shared/either'
import { IGetterBooks } from '@/types/getters'

import { db } from '../../../../database'
import { UseCase } from '../ports/use-case'

export class FindAllProducts implements UseCase<unknown, IGetterBooks[]> {
  async execute(): PromiseEither<IGetterBooks[], Error> {
    const modelsProducts = await db.ModelInfoProducts.findAll({
      where: {
        active: true,
      },
      attributes: ['id', 'title', 'about', 'thumbnail', 'category'],
    })

    return left(modelsProducts as any)
  }
}
