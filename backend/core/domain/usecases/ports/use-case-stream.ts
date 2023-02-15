import { PromiseEither } from '@/shared/either'
import { Readable } from 'stream'


export type FileParams = {
	pathAbsolute: string
	name: string
	pathRelative: string
	ext: string
	uniqueName?: string
	size: string
}

export type File<T> = (FileParams & T) | FileParams
export interface UseCaseStream<Setter, Response> {
	execute: (
		_body: Readable,
		_params?: File<Setter>
	) => PromiseEither<File<Response>, Error>
}
