"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  database: true,
  db: true,
  build: true
};
Object.defineProperty(exports, "build", {
  enumerable: true,
  get: function () {
    return _build.build;
  }
});
Object.defineProperty(exports, "database", {
  enumerable: true,
  get: function () {
    return _database.database;
  }
});
Object.defineProperty(exports, "db", {
  enumerable: true,
  get: function () {
    return _models.db;
  }
});

var _database = require("./config/database");

var _models = require("./models");

var _build = require("./build");

var _models2 = require("./types/models");

Object.keys(_models2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _models2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _models2[key];
    }
  });
});

/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();