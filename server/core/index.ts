/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

import { database, db } from 'mapacultural-database'

export const build = async () => {
	database.addModels([...Object.values(db)])
	await database.sync()
}

async function main() {
	await build()
}

main()

export * from './domain/entities'
export * from './domain/repositories'
export * from './domain/usecases'
