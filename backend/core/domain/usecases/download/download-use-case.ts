import { Readable } from 'stream'

import { left, PromiseEither, right } from '@/shared/either'

import { CompressFile } from '../interface/compress.interface'
import { File, UseCaseStream } from '../ports/use-case-stream'
import { FileFolderGenerate } from '../utils/file-folder-generate/file-folder-generate-use-case'
import { PathProductDefault } from '../utils/path-product/path-product-use-case'

export class DownloadFile<Setter, Response>
	implements UseCaseStream<Setter, Response>
{
	constructor(private readonly CompressFileUseCase: CompressFile) {}

	async execute(
		body: Readable,
		params: File<Response>
	): PromiseEither<File<Response>, Error> {
		const { fileName, filePath } = FileFolderGenerate.execute({
			name: params.name,
			uniqueName: params.uniqueName,
		})

		const { pathAbsolute, pathRelative } = PathProductDefault.execute({
			name: fileName,
			folder: filePath,
		})

		const compressFileResult = await this.CompressFileUseCase.execute(body, {
			name: fileName,
			pathAbsolute,
			pathRelative,
		})

		if (compressFileResult.isRight()) return right(compressFileResult.value)

		return left({
			...params,
			...compressFileResult.value,
			folderName: filePath,
		})
	}
}
