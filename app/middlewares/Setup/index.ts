/* eslint-disable unused-imports/no-unused-imports */

import busboy from 'connect-busboy'
import cors from 'cors'
import express, { Express } from 'express'

import Helmet from '../Helmet'

export default (Application: Express) => {
  const production = process.env.NODE_ENV === 'production'

  const origin = [
    'https://funcap.mapacultural.se.gov.br/',
    'https://www.googleapis.com/',
    'http://localhost:3000',
    'http://localhost:8000',
    'https://localhost:3000',
    'https://localhost:8000',
    'http://localhost:19006',
  ]

  Application.use(busboy())

  Application.use(
    cors({
      origin: '*',
    })
  )

  Application.use(express.urlencoded({ extended: false }))
  Application.use(express.json({ limit: '50mb' }))

  if (production) {
    Helmet(Application)
  }
}
