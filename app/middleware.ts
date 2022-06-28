import bodyParser from 'body-parser'
import { Express } from 'express'
/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path'
import favicon from 'serve-favicon'

import SetupMiddlewares from './middlewares/Setup'
/* It's a class that initializes
the middlewares for the
express app */
class Middleware {
  constructor(private readonly express: Express) {}

  /**
   * It sets up the middlewares for the express application.
   */
  async init(): Promise<void> {
    SetupMiddlewares(this.express)

    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: false }))
    this.express.use(favicon(path.join(__dirname, '..', 'public', 'favicon.png')))
    this.initErrors()
  }

  initErrors() {
    this.express.use(async (err, req, res, next) => {
      /* This will be the first error handler to be called */
      console.error('Unexpected error')
      return next(err)
    })
  }
}

export default Middleware
