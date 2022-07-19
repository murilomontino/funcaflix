import { Express } from 'express'
/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express'
import fs from 'fs'
import type { Server as ServerHTTP } from 'http'
import { createServer as CreateServerHTTP } from 'http'
import type { Server as ServerHTTPS } from 'https'
import { createServer as CreateServerHTTPS } from 'https'
import next from 'next'

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
  return CreateServerHTTP(express)
}

/**
 * It creates an HTTPS server using the Express framework
 * @param {Express} express - Express - The express instance that you want to use.
 * @returns A server object
 */
const httpsServer = (express: Express): ServerHTTPS => {
  const path = process.cwd() + '/cert/'
  const options = {
    key: fs.readFileSync(path + 'localhost.key'),
    cert: fs.readFileSync(path + 'localhost.crt'),
  }
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

  /**
   * > The `start` function is an asynchronous function that calls the `prepare`
   * function of the next middleware, then calls the `init` function of the
   * middleware, then calls the `init` function of the router, then calls the `build`
   * function, then creates an http server with the express app, then listens on the
   * port specified in the `EXPRESS_PORT` environment variable or 3000
   * 
   * Critérios de Avaliação para o relatório apresentado

(1) Objetos de Estudo - 3 pontos
O desenvolvimento deste projeto possibilitará ao estudante o emprego, ou ampliação, dos saberes e competências construídos ao longo do curso?
O trabalho está contextualizado?
Existe uma justificativa/motivação para a realização do estudo?    
Os objetivos do trabalho estão claramente estabelecidos?
Nota *
(2) Andamento do estudo - 3 pontos
A fundamentação teórica/revisão bibliográfica foi apresentada na profundidade adequada e está coerente com os objetivos do trabalho?
O cronograma de atividades apresentado é razoável para execução durante o TCC 2?
Nota *
(3) Escrita do relatório - 4 pontos
Apresenta redação clara e coesa?
As normas ABNT foram seguidas?
   * 
   */
  async start() {
    await this.next.prepare()
    await this.middleware.init()
    await this.router.init()
    /*  await build() */
    this.server = httpServer(this.express)
    this.server.listen(process.env.EXPRESS_PORT || 3000)
    this.io = new ServerIO(this.server)
    await this.io.init()
  }
}

export default Server
