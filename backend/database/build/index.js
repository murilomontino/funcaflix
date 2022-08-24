"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.build = void 0;

var _database = require("../config/database");

var _models = require("../models");

/* eslint-disable no-console */

/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

const ext = process.env.NODE_ENV === 'production' ? '.js' : '.ts';
const pathModel = __dirname.replace('build', '') + '**/*.model' + ext;

const build = async () => {
  console.log('Sincronizando banco de dados...');

  try {
    await _database.database.sync({}); //await new Seeds(db).run()

    console.log('Banco de dados sincronizado com sucesso!');
  } catch (error) {
    console.log('Erro ao sincronizar banco de dados: ', error.message);
  }

  return {
    db: _models.db,
    database: _database.database
  };
};

exports.build = build;