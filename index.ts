/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires

import { config } from 'dotenv'

import Server from './app/server'

import { database } from 'mapacultural-database'

config()

const server = new Server(process.env.EXPRESS_PORT)

const begin = async () => {
  await server.start()
  console.log(
    `Server running in HTTP --- ${process.env.NODE_ENV} --- on port ${process.env.EXPRESS_PORT}`
  )
}

const beginOnlyAPI = async () => {
  await server.startOnlyExpress()
  console.log(
    `Server running in HTTP --- ${process.env.NODE_ENV} --- on port ${process.env.EXPRESS_PORT}`
  )
}

// aguardar as conexoes serem encerradas para só então encerrar o programa
process.on('SIGTERM', async () => {
  console.log('server ending', new Date().toISOString())
  await database.close()
  await server.close(() => process.exit())
})

process.env.API_ONLY === 'true' ? beginOnlyAPI() : begin()
