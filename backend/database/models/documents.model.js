"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let ModelDocuments = (_dec = (0, _sequelizeTypescript.Table)({
  tableName: 'documentacao',
  freezeTableName: true,
  updatedAt: false,
  createdAt: false,
  underscored: true
}), _dec2 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.INTEGER({
    length: 11
  }),
  allowNull: false,
  primaryKey: true,
  autoIncrement: true,
  field: 'id'
}), _dec3 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.INTEGER({
    length: 11
  }),
  allowNull: false,
  field: 'id_produto'
}), _dec4 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(500),
  allowNull: false,
  field: 'descricao',
  defaultValue: 'Não informado'
}), _dec5 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.INTEGER({
    length: 11
  }),
  allowNull: false,
  defaultValue: 0,
  field: 'tipo',
  comment: 'informa se é um capa, foto do artista, foto do local, documentário e etc'
}), _dec6 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(300),
  allowNull: true,
  field: 'arquivo_path',
  comment: 'nome unico do arquivo para ser pesquisado na pasta, com seu caminho relativo.'
}), _dec7 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.DATE,
  allowNull: false,
  field: 'data_cadastro',
  defaultValue: _sequelizeTypescript.DataType.NOW,
  comment: 'data que o documento foi enviado a base'
}), _dec8 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(300),
  allowNull: true,
  field: 'arquivo'
}), _dec9 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(40),
  allowNull: true,
  field: 'data'
}), _dec10 = (0, _sequelizeTypescript.Column)({}), _dec(_class = (_class2 = class ModelDocuments extends _sequelizeTypescript.Model {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "idUser", _descriptor2, this);

    _initializerDefineProperty(this, "description", _descriptor3, this);

    _initializerDefineProperty(this, "type", _descriptor4, this);

    _initializerDefineProperty(this, "filePath", _descriptor5, this);

    _initializerDefineProperty(this, "createdAt", _descriptor6, this);

    _initializerDefineProperty(this, "file", _descriptor7, this);

    _initializerDefineProperty(this, "date", _descriptor8, this);

    _initializerDefineProperty(this, "document", _descriptor9, this);

    _defineProperty(this, "typeFile", void 0);

    _defineProperty(this, "link", void 0);

    _defineProperty(this, "numberInscription", void 0);

    _defineProperty(this, "updated", void 0);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "idUser", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "description", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "filePath", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "createdAt", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "file", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "date", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "document", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = ModelDocuments;
exports.default = _default;