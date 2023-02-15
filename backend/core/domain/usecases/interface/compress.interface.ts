/* eslint-disable @typescript-eslint/no-namespace */
import { PromiseEither } from '@/shared/either'
import { Readable } from 'stream'


import { UseCase } from '../ports/use-case'

export interface CompressFile extends UseCase<Readable, CompressParams> {
	execute: (
		_body: Readable,
		_params?: CompressParams
	) => PromiseEither<CompressParams, Error>
}

export type CompressParams = {
	pathAbsolute: string
	name: string
	pathRelative: string
}
