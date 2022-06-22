import { left, PromiseEither, right } from '@/shared/either'
import assert from 'assert'
import { existsSync, PathLike, ReadStream } from 'fs'

import { NotFoundProductError } from '../../errors'
import { UseCase } from '../../ports/use-case'
import { CreateReadStream } from '../../utils/create-read-stream/create-read-stream'

export class LoadImageStreamUseCase implements UseCase<Params, ReadStream> {
  constructor(
		private readonly StreamUseCase: CreateReadStream // eslint-disable-line
  ) {}
  async execute({ path, encoding = null }: Params): PromiseEither<Stream> {
    assert(path, 'path is required')

    if (!existsSync(path)) {
      return right(new NotFoundProductError('Image not found'))
    }

    const stream = await this.StreamUseCase.run({ path, encoding })

    if (stream.isRight()) {
      return right(stream.value)
    }
    // Retorna a stream para o pipe(res)
    return left(stream.value)
  }
}

export type Stream = {
  size: number
  stream: ReadStream
}

type Params = {
  path: PathLike
  encoding?: BufferEncoding
}
