/* eslint-disable no-unused-vars */
import { Readable } from 'stream'

import { left, PromiseEither, right } from '@/shared/either'

import { CompressFile, CompressParams } from '../interface/compress.interface'
import { CreateWriteStreamSystem } from '../utils/create-write-stream/create-write-stream'

export class CompressPDFUseCase implements CompressFile {
	async execute(
		data: Readable,
		params: CompressParams
	): PromiseEither<CompressParams, Error> {
		const writeOrErr = await CreateWriteStreamSystem.writeToFile(
			params.pathAbsolute,
			data
		)

		if (writeOrErr.isRight()) {
			return right(writeOrErr.value)
		}

		return left(params)
	}
}
