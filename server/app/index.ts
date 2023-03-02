import express, { Express } from 'express'
import fs from 'fs'
import type { Server as ServerHTTP } from 'http'
import { createServer as CreateServerHTTP } from 'http'
import type { Server as ServerHTTPS } from 'https'
import { createServer as CreateServerHTTPS } from 'https'
import { build } from 'mapacultural-database'
import next from 'next'
import path from 'path'

import Middleware from './middleware'
import NextjsExpressRouter from './nextjs_express_router'
import ServerIO from './socket-io'

/**
 * It creates a server.
 * @param {Express} express - Express
 * @returns A function that takes an express object and returns a ServerHTTP
 * object.
 */
const httpServer = (express: Express): ServerHTTP => {
	console.log(
		`Server running in HTTP --- ${process.env.NODE_ENV} --- on port ${process.env.EXPRESS_PORT}`
	)
	return CreateServerHTTP(express)
}

/**
 * It creates an HTTPS server using the Express framework
 * @param {Express} express - Express - The express instance that you want to use.
 * @returns A server object
 */
const httpsServer = (express: Express): ServerHTTPS => {
	const cert = fs.readFileSync(
		path.resolve(process.cwd(), 'certs', 'cert.crt'))

	const key = fs
		.readFileSync(
			path.resolve(process.cwd(), 'certs', 'key.pem'), 'utf8')
		.replace(/\\n/gm, '\n')

	const options = {
		key,
		cert,
	}
	console.log(
		`Server running in HTTPS --- ${process.env.NODE_ENV} --- on port ${process.env.EXPRESS_PORT}`
	)
	return CreateServerHTTPS(options, express)
}

/* It's a class that starts an Express server with Next.js and TypeScript */
class Server {
	private readonly express = express()
	private readonly next = next({ dev: process.env.NODE_ENV !== 'production' })
	private middleware: Middleware
	private router: NextjsExpressRouter
	private server: ServerHTTP | ServerHTTPS
	private io: ServerIO

	constructor(private readonly port) {
		this.middleware = new Middleware(this.express)
		this.router = new NextjsExpressRouter(this.express, this.next)
	}

	async close(callback: () => void) {
		this.server.close(callback)
	}

	async start() {
		await this.next.prepare()
		await this.middleware.init()
		await this.router.init()
		this.server = httpsServer(this.express)
		this.server.listen(process.env.EXPRESS_PORT || 3000)
		this.io = new ServerIO(this.server)
		await this.io.init()
		await build()
	}

	async startOnlyExpress() {
		await this.middleware.init()
		this.router.initApi()
		this.server = httpsServer(this.express)
		this.server.listen(process.env.EXPRESS_PORT || 3000)
		await build()
	}
}

export default Server
