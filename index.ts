/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires

import { config } from 'dotenv'

import Server from './app/server'

import { database } from 'mapacultural-database'

config()

const server = new Server(process.env.EXPRESS_PORT)

const begin = async () => {
  await server.start()
}

const beginOnlyAPI = async () => {
  await server.startOnlyExpress()
}

// aguardar as conexoes serem encerradas para só então encerrar o programa
process.on('SIGTERM', async () => {
  console.log('server ending', new Date().toISOString())
  await database.close()
  await server.close(() => process.exit())
})

process.env.API_ONLY === 'true' ? beginOnlyAPI() : begin()
