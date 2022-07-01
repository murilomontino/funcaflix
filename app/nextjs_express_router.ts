import { Express } from 'express'
import { NextServer } from 'next/dist/server/next'

import Api from './routes/api'
import Pages from './routes/pages'

/* NextjsExpressRouter is a class that provides a method to create a Next.js router
that can be used with Express. */
class NextjsExpressRouter {
  constructor(private readonly express: Express, private readonly next: NextServer) {}

  async init() {
    this.initApi()
    this.initPages()
    this.initErrors()
  }

  initApi() {
    return new Api(this.express).init()
  }

  initPages() {
    return new Pages(this.express, this.next).init()
  }

  initErrors() {
    // catch 404 and forward to error handler
    this.express.use((req, res, next) => {
      const err = new Error('Not Found')
      res.status(404)
      next(err)
    })

    this.express.use((err, req, res, next) => {
      res.status(err.status || 500)
      res.locals.error = err
      res.locals.errorDescription = err.message
      this.next.render(req, res, '/_error', {})
    })
  }
}

export default NextjsExpressRouter
