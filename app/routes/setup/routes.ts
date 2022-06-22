import type { Express } from 'express'

import ApiBooks from './books-routes'
import ApiImages from './images-routes'

export default (Application: Express) => {
  Application.use('/api', ApiBooks)
  Application.use('/api', ApiImages)
}
