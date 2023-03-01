import { InterfaceError } from '@/helpers/interface-error'
import { Either } from '@/shared/either'

export class FailedPromiseWriteVideoError
	extends Error
	implements InterfaceError
{
	constructor(promise01: Either<any, Error>, promise02: Either<any, Error>) {
		const messageOrErr01 = promise01.isRight()
			? promise01.value.message
			: 'Sucesso na primeira promise'

		const messageOrErr02 = promise02.isRight()
			? promise02.value.message
			: 'Sucesso na segunda promise'

		const messageErr = `${messageOrErr01} - ${messageOrErr02}`

		super(messageErr)
		this.name = 'FailedPromiseWriteVideoError'
	}
}
