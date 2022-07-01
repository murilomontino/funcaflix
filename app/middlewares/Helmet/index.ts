import type { Express } from 'express'
import helmet from 'helmet'

export default (Application: Express) => {
  Application.use(helmet.dnsPrefetchControl())
  Application.use(helmet.expectCt())
  Application.use(helmet.frameguard())
  Application.use(helmet.hidePoweredBy())
  Application.use(helmet.hsts())
  Application.use(helmet.ieNoOpen())
  Application.use(helmet.noSniff())
  Application.use(helmet.referrerPolicy())
  Application.use(helmet.xssFilter())
  Application.use(
    helmet.contentSecurityPolicy({
      useDefaults: true,
      directives: {
        'script-src': [
          'self',
          'blob:',
          'unsafe-eval',
          'unsafe-inline',
          'https:',
          'http://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.worker.js',
          'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.worker.js',
          'https://1f36-45-185-177-247.ngrok.io',
          'http://localhost:3000/api/*',
          'http://localhost:*',
          'https://www.youtube.com/s/player/f8cb7a3b/www-widgetapi.vflset/www-widgetapi.js',
          'https://www.youtube.com/iframe_api',
          'https://funcap.mapacultural.se.gov.br/',
          'http://funcap.mapacultural.se.gov.br/',
          'https://homologacao.mapacultural.se.gov.br/',
          'https://www.youtube.com/',
          'https://cdn.agora.io/sdk/web/AgoraRTCSDK-2.1.0.js',
        ],
        'media-src': [
          'self',
          'https:',
          'http://localhost:*',
          'http://funcap.mapacultural.se.gov.br/',
          'http://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.worker.js',
          'blob:',
          'data:',

          'https://funcap.mapacultural.se.gov.br/',
          'https://homologacao.mapacultural.se.gov.br/',
          'https://www.youtube.com/',
          'https://i.ytimg.com/',
        ],
        'img-src': [
          'self',
          'https:',
          'http://localhost:*',
          'data:',
          'https://i.ytimg.com/',

          'http://funcap.mapacultural.se.gov.br/',
          'https://funcap.mapacultural.se.gov.br/',
          'https://homologacao.mapacultural.se.gov.br/',
          'https://www.youtube.com/',
        ],
        'default-src': [
          'self',
          'https:',
          'http://funcap.mapacultural.se.gov.br/',
          'http://localhost:*',
          'blob:',
          'unsafe-eval',
          'unsafe-inline',
          'data:',
          'https://www.youtube.com/',
          'https://funcap.mapacultural.se.gov.br/',
          'https://homologacao.mapacultural.se.gov.br/',
        ],
      },
    })
  )
  Application.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
  })
}
