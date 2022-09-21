/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */

import { PromiseEither } from '@/shared/either'
import { PathLike, ReadStream } from 'fs'

export interface CreateReadStream {
  run: (path: CreateReadStream.Params) => CreateReadStream.Response
}

export declare namespace CreateReadStream {
  export type Response = PromiseEither<Stream, Error>
  export type Stream = {
    size: number
    stream: ReadStream
  }
  export type Params = {
    path: PathLike
    encoding?: BufferEncoding
  }
}
