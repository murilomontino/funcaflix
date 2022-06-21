import sharp from 'sharp'
import { Readable } from 'stream'

import { left, PromiseEither, right } from '@/shared/either'

import { NotCompressIMG } from '../errors/not-compress-img'
import { CompressFile, CompressParams } from '../interface/compress.interface'
import { CreateWriteStreamSystem } from '../utils/create-write-stream/create-write-stream'

export class CompressIMGuseCase implements CompressFile {
	async execute(
		body: Readable,
		params: CompressParams
	): PromiseEither<CompressParams, NotCompressIMG> {
		return new Promise((resolve) => {
			const formatWebp = body.pipe(
				sharp().toFormat('webp').webp({ quality: 80 })
			)

			CreateWriteStreamSystem.writeToFile(params.pathAbsolute, formatWebp)
				.then(() => {
					resolve(left(params))
				})
				.catch((err) => {
					resolve(right(new NotCompressIMG(err)))
				})
		})
	}
}

export default CompressIMGuseCase
