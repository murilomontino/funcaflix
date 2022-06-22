import { Express } from 'express'
class Api {
  constructor(private readonly express: Express) {}

  init() {
    this.express.get('/api/get', (req, res) => {
      res.json({ name: 'deu certo' })
    })
  }
}

export default Api
