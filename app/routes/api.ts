import { Express } from 'express'

import SetupRoutes from './setup/routes'
class Api {
  constructor(private readonly express: Express) {}

  init() {
    this.express.get('/api/get', (req, res) => {
      res.json({ name: 'deu certo' })
    })
    SetupRoutes(this.express)
  }
}

export default Api
