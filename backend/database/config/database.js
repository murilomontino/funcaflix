"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.database = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _options = _interopRequireDefault(require("./options"));

var _models = require("../models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import-helpers/order-imports */

/* eslint-disable @typescript-eslint/no-var-requires */

/*
	CONFIGURAçÃO DO DATABASE
*/
const database = new _sequelizeTypescript.Sequelize({
  timezone: '-03:00',
  database: _options.default.database,
  username: _options.default.username,
  password: _options.default.password,
  dialect: _options.default.dialect,
  host: _options.default.host,
  pool: {
    max: 1000,
    min: 0,
    acquire: 30000,
    idle: 300000
  },
  port: _options.default.port,
  logging: false,
  models: [...Object.values(_models.db)],
  dialectOptions: {
    statement_timeout: 1000,
    idle_in_transaction_session_timeout: 5000,
    connection_timeout: 5000,
    connectionTimeoutMillis: 5000,
    options: {
      requestTimeout: 50000,
      statement_timeout: 1000,
      idle_in_transaction_session_timeout: 5000,
      connection_timeout: 5000,
      connectionTimeoutMillis: 5000
    }
  }
});
exports.database = database;
var _default = database;
exports.default = _default;