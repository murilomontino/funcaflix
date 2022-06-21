require('dotenv').config()

const { build } = require('./lib/database')

const { createServer } = require('https')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({
  dev,
  hostname,
  port,
})
const handle = app.getRequestHandler()

const httpsOptions = {
  key: fs.readFileSync('./cert/localhost.key'),
  cert: fs.readFileSync('./cert/localhost.crt'),
}
app.prepare().then(() => {
  build().then(() => {
    createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true)
      handle(req, res, parsedUrl)
    }).listen(3000, (err) => {
      if (err) throw err
      console.log('> Server started on https://localhost:3000')
    })
  })
})
