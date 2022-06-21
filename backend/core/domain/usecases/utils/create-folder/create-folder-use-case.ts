import fs, { existsSync } from 'fs'
import { resolve } from 'path'

import { Either, left, right } from '@/shared/either'

import { FolderNotCreatedInSystem } from '../../errors/folder-not-created-in-system'
import { CreateFolder } from './create-folder'

export class CreateFolderUseCase implements CreateFolder {
	private isValidParams(
		folder: CreateFolder.Params
	): Either<string[], FolderNotCreatedInSystem> {
		if (!folder) {
			return right(
				new FolderNotCreatedInSystem('O parâmetro folder não foi repassado')
			)
		}

		if (!folder.childrens || !Array.isArray(folder.childrens)) {
			return right(
				new FolderNotCreatedInSystem(
					'O parâmetro children não foi repassado ou não é válido'
				)
			)
		}

		if (!folder.path) {
			return right(new FolderNotCreatedInSystem('Path não foi repassado'))
		}

		const childrens = folder.childrens.map((children) => {
			if (!children || typeof children !== 'string') {
				return false
			}

			const notSpaceChildren = children.trim()

			if (notSpaceChildren.length === 0) {
				return false
			}

			return notSpaceChildren
		})

		if (childrens.includes(false)) {
			return right(
				new FolderNotCreatedInSystem(
					'O parâmetro children não foi repassado ou não é válido'
				)
			)
		}

		return left(childrens as string[])
	}

	async createFolder(folder: CreateFolder.Params): CreateFolder.Response {
		try {
			const isValid = this.isValidParams(folder)

			if (isValid.isRight()) {
				return isValid
			}

			const isExistsPathOrErr = existsSync(folder.path)

			if (!isExistsPathOrErr) {
				return right(
					new FolderNotCreatedInSystem('O diretório não existe no sistema')
				)
			}

			const path = resolve(folder.path, ...folder.childrens)

			if (!fs.existsSync(path)) {
				fs.mkdirSync(path, {
					recursive: true,
				})
			}

			return left(path)
		} catch (error) {
			return right(
				new FolderNotCreatedInSystem('Erro lançado pela biblioteca fs')
			)
		}
	}
}
