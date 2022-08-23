'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = exports.Options = exports.ENV = void 0

/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

let ENV
exports.ENV = ENV
;(function (ENV) {
  ENV[(ENV['development'] = 0)] = 'development'
  ENV[(ENV['production'] = 1)] = 'production'
  ENV[(ENV['test'] = 2)] = 'test'
})(ENV || (exports.ENV = ENV = {}))

const Options = {
  [ENV.development]: {
    database: 'auxilio_cultural',
    username: 'root',
    password: 'admin',
    dialect: 'mariadb',
    host: 'localhost',
    port: 3306,
  },
  [ENV.production]: {
    dialect: 'mariadb',
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    port: process.env.port,
  },
  [ENV.test]: {
    database: 'auxilio_cultural',
    username: 'root',
    password: 'admin',
    dialect: 'mariadb',
    host: 'localhost',
    port: 3306,
  },
}
exports.Options = Options

const env = (() => {
  if (process.env.NODE_ENV === 'development') {
    return ENV.development
  }

  if (process.env.NODE_ENV === 'production') {
    return ENV.production
  }

  return ENV.test
})()

var _default = Options[env]
exports.default = _default
