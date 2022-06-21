import { Express } from 'express'

class Pages {
  constructor(private readonly express: Express, private readonly next) {}

  init() {
    this.initCustomPages()
    this.initDefaultPages()
  }

  initCustomPages() {}

  initDefaultPages() {
    this.express.get('/', (req, res) => {
      return this.next.render(req, res, `/main`, req.query)
    })

    this.express.get('*', (req, res) => {
      return this.next.render(req, res, `${req.path}`, req.query)
    })
  }
}

export default Pages
