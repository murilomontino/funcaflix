/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */

import { Either } from '@/shared/either'

export interface CreateFolder {
	createFolder: (folder: CreateFolder.Params) => CreateFolder.Response
}

export declare namespace CreateFolder {
	export type Response = Promise<Either<string, Error>>
	export type Params = {
		path: string
		childrens: string[]
	}
}
