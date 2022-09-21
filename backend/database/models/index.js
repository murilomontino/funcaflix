"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.db = void 0;

var _audiovisual = _interopRequireDefault(require("./audiovisual.model"));

var _books = _interopRequireDefault(require("./books.model"));

var _datasheet = _interopRequireDefault(require("./datasheet.model"));

var _documentsProducts = _interopRequireDefault(require("./documents-products.model"));

var _documentsProjects = _interopRequireDefault(require("./documents-projects.model"));

var _institution = _interopRequireDefault(require("./institution.model"));

var _music = _interopRequireDefault(require("./music.model"));

var _options = _interopRequireDefault(require("./options.model"));

var _products = _interopRequireDefault(require("./products.model"));

var _projects = _interopRequireDefault(require("./projects.model"));

var _sponsor = _interopRequireDefault(require("./sponsor.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Configurando Models
 */
const db = (() => {
  return {
    ModelBooks: _books.default,
    ModelInfoProducts: _products.default,
    ModelOptionsProduct: _options.default,
    ModelInstitution: _institution.default,
    ModelDataSheetProducts: _datasheet.default,
    ModelDocsProducts: _documentsProducts.default,
    ModelSponsorProduct: _sponsor.default,
    ModelMusics: _music.default,
    ModelAudioVisual: _audiovisual.default,
    ModelDocProject: _documentsProjects.default,
    ModelProject: _projects.default
  };
})();

exports.db = db;
var _default = db;
exports.default = _default;