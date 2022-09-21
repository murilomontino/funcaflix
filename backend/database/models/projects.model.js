"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let ModelProject = (_dec = (0, _sequelizeTypescript.Table)({
  tableName: 'projeto',
  freezeTableName: true,
  updatedAt: false,
  createdAt: false,
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
  field: 'id_usuario'
}), _dec4 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(14),
  allowNull: false,
  field: 'cpf'
}), _dec5 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(200),
  allowNull: false,
  field: 'nome_projeto'
}), _dec6 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(7500),
  allowNull: false,
  field: 'resumo_projeto'
}), _dec7 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(7500),
  allowNull: false,
  field: 'descricao_projeto'
}), _dec8 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(200),
  allowNull: false,
  field: 'tipo_projeto'
}), _dec9 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(200),
  allowNull: false,
  field: 'url_projeto'
}), _dec10 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.DATE,
  allowNull: false,
  field: 'data_inicio'
}), _dec11 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.DATE,
  allowNull: false,
  field: 'data_fim'
}), _dec12 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(5),
  allowNull: false,
  field: 'hora_final'
}), _dec13 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.INTEGER({
    length: 2
  }),
  allowNull: false,
  field: 'status'
}), _dec14 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(20),
  allowNull: false,
  field: 'data_cadastro'
}), _dec15 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(20),
  allowNull: false,
  field: 'data_atualizacao'
}), _dec16 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.INTEGER({
    length: 2
  }),
  allowNull: false,
  field: 'tipo_pes_fis_jur'
}), _dec17 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(200),
  allowNull: false,
  field: 'orgao'
}), _dec18 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(150),
  allowNull: false,
  field: 'cidade'
}), _dec19 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.INTEGER({
    length: 11
  }),
  allowNull: false,
  field: 'qtd_vagas'
}), _dec20 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.INTEGER({
    length: 11
  }),
  allowNull: false,
  field: 'permissao_inscricao'
}), _dec21 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(200),
  allowNull: false,
  field: 'recurso_financeiro'
}), _dec22 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING(4),
  allowNull: false,
  field: 'ano_lancamento'
}), _dec(_class = (_class2 = class ModelProject extends _sequelizeTypescript.Model {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "idUser", _descriptor2, this);

    _initializerDefineProperty(this, "cpf", _descriptor3, this);

    _initializerDefineProperty(this, "nameProject", _descriptor4, this);

    _initializerDefineProperty(this, "summaryProject", _descriptor5, this);

    _initializerDefineProperty(this, "aboutProject", _descriptor6, this);

    _initializerDefineProperty(this, "typeProject", _descriptor7, this);

    _initializerDefineProperty(this, "urlProject", _descriptor8, this);

    _initializerDefineProperty(this, "dateStart", _descriptor9, this);

    _initializerDefineProperty(this, "dateEnd", _descriptor10, this);

    _initializerDefineProperty(this, "hourEnd", _descriptor11, this);

    _initializerDefineProperty(this, "status", _descriptor12, this);

    _initializerDefineProperty(this, "createdAt", _descriptor13, this);

    _initializerDefineProperty(this, "updateAt", _descriptor14, this);

    _initializerDefineProperty(this, "type", _descriptor15, this);

    _initializerDefineProperty(this, "company", _descriptor16, this);

    _initializerDefineProperty(this, "city", _descriptor17, this);

    _initializerDefineProperty(this, "amountOfVacancies", _descriptor18, this);

    _initializerDefineProperty(this, "amountOfEnrollment", _descriptor19, this);

    _initializerDefineProperty(this, "financialResource", _descriptor20, this);

    _initializerDefineProperty(this, "yearRelease", _descriptor21, this);
  }

  static async securityCPF(instance) {
    instance.cpf = '***.***.***-**';
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
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cpf", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nameProject", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "summaryProject", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "aboutProject", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "typeProject", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "urlProject", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "dateStart", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "dateEnd", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "hourEnd", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "status", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "createdAt", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "updateAt", [_dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "company", [_dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "city", [_dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "amountOfVacancies", [_dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "amountOfEnrollment", [_dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "financialResource", [_dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "yearRelease", [_dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2, "securityCPF", [_sequelizeTypescript.AfterFind], Object.getOwnPropertyDescriptor(_class2, "securityCPF"), _class2)), _class2)) || _class);
var _default = ModelProject;
exports.default = _default;