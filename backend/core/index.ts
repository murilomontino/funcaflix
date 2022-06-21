/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

import { database, db } from '@mapa-cultural/database'

export const build = async () => {
	database.addModels([...Object.values(db)])
	await database.sync()
}

async function main() {
	await build()
}

main()

export * from './domain/usecases'
export * from './domain/entities'
export * from './domain/repositories'
