/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
import { PromiseEither } from '@/shared/either'
import { Either, left, right } from '@/shared/either'
import { existsSync, ReadStream } from 'fs'
import { resolve } from 'path'

import { NotFoundProductError, MissingParamError } from '../errors'
import { UseCase } from '../ports/use-case'
import { CreateReadStream } from '../utils/create-read-stream/create-read-stream'

export class GetPDFProductBookUseCase implements UseCase<GetPDFProduct.Params, ReadStream> {
  constructor(private readonly StreamUseCase: CreateReadStream) {}

  async execute({ author, folder, id, title }: any): PromiseEither<ReadStream, Error> {
    // Verifica se os params são válidos, se não retorna um erro MissingParamError
    if (!id) {
      return right(new MissingParamError('id é obrigatório'))
    }

    const path = resolve(process.env.PATH_PRODUCTS, folder, id)

    const arqExist = existsSync(path) // Verifica se o arquivo existe

    // Caso o arquivo não exista emite um erro
    if (!arqExist) {
      return right(new NotFoundProductError(id, author, title))
    }

    const stream = await this.StreamUseCase.run({ path })

    if (stream.isRight()) {
      return right(stream.value)
    }
    // Retorna a stream para o pipe(res)
    return left(stream.value as any)
  }
}

export declare namespace GetPDFProduct {
  export type Params = {
    id: string
    author: string
    title: string
    folder: string
  }
  export type Stream = {
    size: number
    stream: ReadStream
  }
  export type Response = Either<Stream, NotFoundProductError>
}
