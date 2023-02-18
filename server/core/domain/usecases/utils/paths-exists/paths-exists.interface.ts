import { TypeDoc } from '@/types/ports'
import { PathLike } from 'fs'

import { UseCase } from '../../ports/use-case'

export type FileParams = {
	id: string
	type: TypeDoc
}

export type UseCasePathsExists = UseCase<FileParams, PathLike>
