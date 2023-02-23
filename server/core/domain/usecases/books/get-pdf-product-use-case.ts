/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
import { PromiseEither } from '@/shared/either'
import { left, right } from '@/shared/either'
import { TypeDoc } from '@/types/ports'

import { MissingParamError } from '../errors'
import { UseCase } from '../ports/use-case'
import { CreateReadStream } from '../utils/create-read-stream/create-read-stream'
import { UseCasePathsExists } from '../utils/paths-exists/paths-exists.interface'

export class GetPDFProductBookUseCase
	implements UseCase<GetPDFProduct.Params, CreateReadStream.Stream>
{
	constructor(
		private readonly StreamUseCase: CreateReadStream,
		private readonly PathExistsUseCase: UseCasePathsExists
	) {}

	async execute({ id }): PromiseEither<CreateReadStream.Stream, Error> {
		// Verifica se os params são válidos, se não retorna um erro MissingParamError
		if (!id) {
			return right(new MissingParamError('id é obrigatório'))
		}

		const pathOrErr = await this.PathExistsUseCase.execute({
			id,
			type: TypeDoc.PDF,
		})

		if (pathOrErr.isRight()) {
			return right(pathOrErr.value)
		}

		const stream = await this.StreamUseCase.run({ path: pathOrErr.value })

		if (stream.isRight()) {
			return right(stream.value)
		}

		// Retorna a stream para o pipe(res)
		return left(stream.value)
	}
}

export declare namespace GetPDFProduct {
	export type Params = {
		id: string
	}
}
