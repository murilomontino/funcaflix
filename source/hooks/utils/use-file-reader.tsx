import { useCallback } from 'react'

type Document = {
	type: 'success' | 'error'
	uri: string
	name: string
	size: number
	mimeType: string
}

const EventFileReader = async (file: File): Promise<Document> => {
	return new Promise((resolve) => {
		const reader = new FileReader()

		reader.onload = () => {
			resolve({
				type: 'success',
				uri: reader.result as string,
				name: file.name,
				size: file.size,
				mimeType: file.type,
			})
		}

		reader.onerror = () => {
			return resolve({
				type: 'error',
				uri: '',
				name: '',
				size: 0,
				mimeType: '',
			})
		}

		reader.readAsDataURL(file)
	})
}

const useFileReader = () => {
	const fileReader = useCallback(
		async (fileList: FileList | File): Promise<Document[] | Document> => {
			if (fileList instanceof File) {
				return await EventFileReader(fileList)
			}

			const files: File[] = Array.from(fileList)

			return await Promise.all(
				files.map(async (file) => {
					const item = await EventFileReader(file)

					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					return item as any
				})
			)
		},
		[]
	)

	return fileReader
}

export default useFileReader
