import type { Express } from 'express'

import ApiBooks from './books-routes'
import ApiEvents from './events-routes'
import ApiImages from './images-routes'
import ApiProfiles from './profiles-routes'

export default (Application: Express) => {
  Application.use('/api', ApiBooks)
  Application.use('/api', ApiImages)
  Application.use('/api', ApiProfiles)
  Application.use('/api', ApiEvents)
}
