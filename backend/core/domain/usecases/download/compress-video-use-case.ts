/* eslint-disable no-unused-vars */
import ffmpeg from 'fluent-ffmpeg'
import { Readable } from 'stream'

import { left, PromiseEither, right } from '@/shared/either'

import { CompressFile, CompressParams } from '../interface/compress.interface'

export class CompressVideoUseCase implements CompressFile {
	async execute(
		data: Readable,
		params: CompressParams
	): PromiseEither<CompressParams, Error> {
		return new Promise((resolve) => {
			ffmpeg()
				.input(data)
				.size('720x480')
				.on('error', (err: Error) => {
					resolve(right(err))
				})
				.on('end', () => {
					resolve(left(params))
				})
				.toFormat('mp4')
				.save(params.pathAbsolute)
		})
	}
}
