import { MissingParamError } from '@/domain/usecases/errors/missing-param-error'
import { left, right } from '@/shared/either'
import fs from 'fs'

import { CreateReadStream } from './create-read-stream'

export class CreateReadStreamUseCase implements CreateReadStream {
	async run({
		path,
		encoding = null,
	}: CreateReadStream.Params): CreateReadStream.Response {
		// Verifica se os params são válidos, se não retorna um erro MissingParamError
		if (!path) {
			return right(new MissingParamError('Path é obrigatório'))
		}

		const stream = fs.createReadStream(path, {
			encoding,
			autoClose: true,
		})

		return left({
			size: undefined,
			stream: stream,
		})
	}
}
