"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let ModelProgramsTV = (_dec = (0, _sequelizeTypescript.Table)({
  tableName: 'programas_de_tv',
  freezeTableName: true,
  updatedAt: false,
  underscored: true
}), _dec2 = (0, _sequelizeTypescript.Column)({
  autoIncrement: true,
  primaryKey: true,
  type: _sequelizeTypescript.DataType.INTEGER({
    length: 11
  }),
  allowNull: false
}), _dec3 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.INTEGER({
    length: 11
  }),
  allowNull: false,
  field: 'produto_id'
}), _dec4 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(255),
  allowNull: false,
  field: 'playlist_id',
  defaultValue: 'Não informado'
}), _dec5 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(255),
  allowNull: false,
  field: 'video_id',
  defaultValue: 'Não informado'
}), _dec6 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(255),
  allowNull: false,
  field: 'data_de_publicacao',
  defaultValue: 'Não informado'
}), _dec7 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(5000),
  allowNull: false,
  field: 'sobre',
  defaultValue: 'Não informado'
}), _dec8 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(255),
  allowNull: false,
  field: 'thumbnail',
  defaultValue: 'Não informado'
}), _dec9 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(255),
  allowNull: false,
  field: 'titulo',
  defaultValue: 'Não informado'
}), _dec10 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(1000),
  allowNull: false,
  field: 'tags',
  defaultValue: ''
}), _dec11 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(1000),
  allowNull: false,
  field: 'generos',
  defaultValue: ''
}), _dec12 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.BOOLEAN(),
  allowNull: false,
  field: 'ativo',
  defaultValue: true
}), _dec13 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.DATE,
  allowNull: false,
  field: 'data_cadastro',
  defaultValue: _sequelizeTypescript.DataType.NOW,
  comment: 'data que o produto foi enviado a base de dados'
}), _dec(_class = (_class2 = class ModelProgramsTV extends _sequelizeTypescript.Model {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "idProduct", _descriptor2, this);

    _initializerDefineProperty(this, "playlistId", _descriptor3, this);

    _initializerDefineProperty(this, "videoId", _descriptor4, this);

    _initializerDefineProperty(this, "publishedAt", _descriptor5, this);

    _initializerDefineProperty(this, "description", _descriptor6, this);

    _initializerDefineProperty(this, "thumbnail", _descriptor7, this);

    _initializerDefineProperty(this, "title", _descriptor8, this);

    _initializerDefineProperty(this, "tags", _descriptor9, this);

    _initializerDefineProperty(this, "genres", _descriptor10, this);

    _initializerDefineProperty(this, "active", _descriptor11, this);

    _initializerDefineProperty(this, "createdAt", _descriptor12, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "idProduct", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playlistId", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "videoId", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "publishedAt", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "description", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "thumbnail", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "tags", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "genres", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "active", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "createdAt", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = ModelProgramsTV;
exports.default = _default;