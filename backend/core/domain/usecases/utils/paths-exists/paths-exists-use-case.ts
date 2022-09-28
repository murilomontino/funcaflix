import { left, PromiseEither, right } from '@/shared/either'
import assert from 'assert'
import { existsSync, PathLike } from 'fs'
import { db } from 'mapacultural-database'
import { resolve } from 'path'
import { Op } from 'sequelize'

import { NotFoundProductError } from '../../errors'
import { UseCasePathsExists, FileParams } from './paths-exists.interface'

export class PathExistsUseCase implements UseCasePathsExists {
  async execute({ id, type }: FileParams): PromiseEither<PathLike, NotFoundProductError> {
    assert(id, 'ID is required')

    const uuid = id.split('.')[0]

    const file =
      (await db.ModelDocsProducts.findOne({
        where: {
          [Op.and]: [{ type }, { file: { [Op.like]: `%${uuid}%` } }],
        },
        attributes: ['id', 'filePath'],
      })) ||
      (await db.ModelDocuments.findOne({
        where: {
          [Op.and]: [{ type }, { file: { [Op.like]: `%${uuid}%` } }],
        },
        attributes: ['id', 'filePath'],
      }))

    if (!file) {
      return right(new NotFoundProductError(id))
    }

    const path = resolve(process.env.PATH_PRODUCTS as string, file.get().filePath)

    if (!existsSync(path)) {
      return right(new NotFoundProductError(id))
    }

    return left(path)
  }
}
