import type { Express } from 'express'

import ApiBooks from './books-routes'

export default (Application: Express) => {
  Application.use('/api', ApiBooks)
}
