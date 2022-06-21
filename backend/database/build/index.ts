/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

import { database } from '../config/database'
import { db } from '../models'

const ext = process.env.NODE_ENV === 'production' ? '.js' : '.ts'
const pathModel = __dirname.replace('build', '') + '**/*.model' + ext

export const build = async () => {
	console.log('Sincronizando banco de dados...')
	try {
		database.addModels([...Object.values(db)])
		await database.sync()

		//await new Seeds(db).run()
		console.log('Banco de dados sincronizado com sucesso!')
	} catch (error) {
		console.log('Erro ao sincronizar banco de dados: ', error.message)
	}

	return { db, database }
}
