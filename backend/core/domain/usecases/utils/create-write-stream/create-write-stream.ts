import { createWriteStream, PathLike } from 'fs'
import { Readable } from 'stream'

import { Either, left, right } from '@/shared/either'

export class CreateWriteStreamSystem {
	static async writeToFile(
		filePath: PathLike,
		arr: Readable
	): Promise<Either<string, Error>> {
		return new Promise((resolve) => {
			const file = createWriteStream(filePath)

			arr.pipe(file)

			file.on('finish', () => {
				file.end()
				resolve(left('Arquivo salvo com sucesso'))
			}) // not sure why you want to pass a boolean
			file.on('error', (err) => {
				resolve(right(err))
			}) // don't forget this!
		})
	}
}
