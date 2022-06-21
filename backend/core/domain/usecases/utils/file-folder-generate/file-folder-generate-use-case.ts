import { randomBytes } from 'crypto'

export class FileFolderGenerate {
	static execute(params: FileFolderParmas): FileFolderParamsResponse {
		const uniqueName = randomBytes(11).toString('hex')
		const arrayName = params.name.split('.')
		const ext = arrayName[arrayName.length - 1]
		const filePath = params.uniqueName || uniqueName

		const fileName = `${uniqueName}.${ext}`

		return {
			fileName,
			filePath,
		}
	}
}

export interface FileFolderParmas {
	name: string
	uniqueName?: string
}

export interface FileFolderParamsResponse {
	filePath: string
	fileName: string
}
