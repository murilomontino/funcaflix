import { config } from 'dotenv'
import { database } from 'mapacultural-database'

import Server from './dist/app'

config()

const server = new Server(process.env.EXPRESS_PORT)

export const begin = async () => {
	await server.start()
}

export const beginOnlyAPI = async () => {
	await server.startOnlyExpress()
}

// aguardar as conexões serem encerradas para só então encerrar o programa
process.on('SIGTERM', async () => {
	console.log('server ending', new Date().toISOString())
	await database.close()
	await server.close(() => process.exit())
})

process.env.API_ONLY === 'true' ? beginOnlyAPI() : begin()
