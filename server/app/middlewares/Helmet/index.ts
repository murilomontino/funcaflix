import type { Express } from 'express'
import helmet from 'helmet'

const HelmetMiddleware = (Application: Express) => {
  Application.use(helmet.dnsPrefetchControl())
  Application.use(helmet.expectCt())
  Application.use(helmet.frameguard())
  Application.use(helmet.hidePoweredBy())
  Application.use(helmet.hsts())
  Application.use(helmet.ieNoOpen())
  Application.use(helmet.noSniff())
  Application.use(helmet.referrerPolicy())
  Application.use(helmet.xssFilter())

  Application.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
  })
}

export default HelmetMiddleware
