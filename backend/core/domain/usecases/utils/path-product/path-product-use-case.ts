import { existsSync, mkdirSync } from 'fs'
import { resolve } from 'path'

export class PathProductDefault {
	static execute(params: PathParams): PathResponse {
		const path = process.env.PATH_PRODUCTS

		const { name, folder } = params

		if (folder) {
			const pathFolder = resolve(path, folder)
			const pathRelative = `${folder}/${name}`

			const pathAbsolute = resolve(path, pathRelative)

			if (!existsSync(pathAbsolute)) {
				mkdirSync(pathFolder, {
					recursive: true,
				})
			}
			return { pathRelative, pathAbsolute }
		}

		const pathRelative = name
		const pathAbsolute = resolve(path, name)

		return { pathRelative, pathAbsolute }
	}
}

export interface PathParams {
	name: string
	folder?: string
}

export interface PathResponse {
	pathAbsolute: string
	pathRelative: string
}
