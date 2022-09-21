import { left, PromiseEither, right } from '@/shared/either'
import assert from 'assert'
import { existsSync, PathLike } from 'fs'
import { db } from 'mapacultural-database'
import { resolve } from 'path'
import { Op } from 'sequelize'

import { NotFoundProductError } from '../../errors'
import { UseCase } from '../../ports/use-case'

export class PathImageExistsUseCase implements UseCase<Params, PathLike> {
  async execute({ image }: Params): PromiseEither<PathLike, NotFoundProductError> {
    assert(image, 'Image is required')

    const uuid = image.split('.')[0]

    const thumbnail = await db.ModelDocsProducts.findOne({
      where: {
        type: 104,
        file: { [Op.like]: `%${uuid}%` },
      },
      attributes: ['id', 'filePath'],
    })

    if (!thumbnail) {
      return right(new NotFoundProductError(image))
    }

    const path = resolve(process.env.PATH_PRODUCTS as string, thumbnail.get().filePath)

    if (!existsSync(path)) {
      return right(new NotFoundProductError(image))
    }

    return left(resolve(path))
  }
}

export type Params = {
  image: string
}
