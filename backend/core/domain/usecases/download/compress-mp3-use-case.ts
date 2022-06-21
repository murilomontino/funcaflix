import ffmpeg from 'fluent-ffmpeg'
import { Readable } from 'stream'

import { left, PromiseEither, right } from '@/shared/either'

import { NotCompressMP3 } from '../errors/not-compress-mp3'
import { CompressFile, CompressParams } from '../interface/compress.interface'

export class CompressMP3UseCase implements CompressFile {
	async execute(
		body: Readable,
		params: CompressParams
	): PromiseEither<CompressParams, NotCompressMP3> {
		return new Promise((resolve) => {
			ffmpeg({
				source: body,
			})
				.on('error', (err: Error) => {
					resolve(right(new NotCompressMP3(err.message)))
				})
				.on('end', () => {
					resolve(left(params))
				})
				.toFormat('mp3')
				.save(params.pathAbsolute)
		})
	}
}

export default CompressMP3UseCase
