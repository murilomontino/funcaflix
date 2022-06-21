/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

export { database } from './config/database'
export { db } from './models'
export { build } from './build'
export * from './types/models'
