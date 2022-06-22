import { Express } from 'express'
/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express'
import fs from 'fs'
import type { Server as ServerHTTP } from 'http'
import { createServer as CreateServerHTTP } from 'http'
import type { Server as ServerHTTPS } from 'https'
import { createServer as CreateServerHTTPS } from 'https'
import next from 'next'

import { build } from '../backend/database'
import Middleware from './middleware'
import NextjsExpressRouter from './nextjs_express_router'

const httpServer = (express: Express): ServerHTTP => {
  return CreateServerHTTP(express)
}

const httpsServer = (express: Express): ServerHTTPS => {
  const options = {
    key: fs.readFileSync('../cert/localhost.key'),
    cert: fs.readFileSync('../cert/localhost.crt'),
  }
  return CreateServerHTTPS(options, express)
}

class Server {
  private readonly express = express()
  private readonly next = next({ dev: process.env.NODE_ENV !== 'production' })
  private middleware: Middleware
  private router: NextjsExpressRouter
  private server: ServerHTTP | ServerHTTPS

  constructor(private readonly port) {
    this.middleware = new Middleware(this.express)
    this.router = new NextjsExpressRouter(this.express, this.next)
  }

  async start() {
    await this.next.prepare()
    await this.middleware.init()
    await this.router.init()
    await build()
    this.server = httpServer(this.express)
    this.server.listen(process.env.EXPRESS_PORT || 3000)
  }
}

export default Server
