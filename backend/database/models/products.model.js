"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let ModelInfoProducts = (_dec = (0, _sequelizeTypescript.Table)({
  tableName: 'produtos',
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
  type: _sequelizeTypescript.DataType.STRING({
    length: 300
  }),
  allowNull: false,
  field: 'titulo',
  defaultValue: 'Não informado',
  comment: 'titulo do produto, pode ser de um evento, exposição, filmes, livros e musicas'
}), _dec4 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING({
    length: 5000
  }),
  allowNull: false,
  field: 'sobre',
  defaultValue: 'Não informado',
  comment: 'sobre o produto'
}), _dec5 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.SMALLINT({
    length: 6
  }),
  allowNull: false,
  defaultValue: 0,
  field: 'categoria',
  comment: 'categoria recebe um numérico referente ao produto, pode ser  audio visual, música, livro, evento e exposição'
}), _dec6 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.SMALLINT({
    length: 6
  }),
  allowNull: false,
  defaultValue: 0,
  field: 'recurso',
  comment: 'categoria recebe um numérico referente ao produto, pode ser  audio visual, música, livro, evento e exposição'
}), _dec7 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.SMALLINT({
    length: 6
  }),
  allowNull: false,
  field: 'subcategoria',
  defaultValue: 0,
  comment: 'pode ser mp3, album, single, ep, curtas, documentários, shows, '
}), _dec8 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING({
    length: 500
  }),
  allowNull: false,
  defaultValue: 'Não informado',
  field: 'imagem_divulgacao'
}), _dec9 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING({
    length: 300
  }),
  allowNull: false,
  defaultValue: 'Não informado',
  field: 'link',
  comment: 'recebe o link da pagina desse produto'
}), _dec10 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING({
    length: 100
  }),
  allowNull: false,
  defaultValue: 'Não informado',
  field: 'local_cadastro',
  comment: 'Recebe o tipo de filtro para visualização de url, se Sergipe, mostra tudo d Sergipe, se Aracaju mostra tudo de Aracaju e por ai vai.'
}), _dec11 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.STRING({
    length: 20
  }),
  allowNull: false,
  defaultValue: 'Não informado',
  field: 'cpf_cnpj',
  comment: 'recebe o cpf ou cnpj de quem é o responsável pelo o produto'
}), _dec12 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.INTEGER({
    length: 11
  }),
  allowNull: false,
  defaultValue: 0,
  field: 'id_usuario',
  comment: 'recebe o id do usuário que está logado e que cadastrou o produto.'
}), _dec13 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.INTEGER({
    length: 11
  }),
  allowNull: false,
  defaultValue: 0,
  field: 'id_orgao',
  comment: 'recebe o id do orgão que esse produto foi cadastrado. Para facilitar nos filtros'
}), _dec14 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.INTEGER({
    length: 11
  }),
  allowNull: false,
  field: 'id_usuario_cadastrou',
  defaultValue: 0,
  comment: 'recebe o id do usuario que está cadastrando o produto'
}), _dec15 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.DATE,
  allowNull: false,
  field: 'data_cadastro',
  defaultValue: _sequelizeTypescript.DataType.NOW,
  comment: 'data que o produto foi enviado a base de dados'
}), _dec16 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.DATE,
  allowNull: false,
  field: 'data_atualizacao',
  defaultValue: _sequelizeTypescript.DataType.NOW,
  comment: 'data que o produto foi atualizado na base'
}), _dec17 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.BOOLEAN,
  allowNull: false,
  field: 'ativo',
  defaultValue: false,
  comment: 'informa se o produto é visível ou não'
}), _dec18 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.BOOLEAN,
  allowNull: false,
  field: 'existe_sub_prod',
  defaultValue: false,
  comment: 'informa se o produto contém sub-produtos, exemplo: um evento pode conter vários eventos'
}), _dec19 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.INTEGER({
    length: 11
  }),
  allowNull: false,
  field: 'id_sub_produto',
  defaultValue: 0,
  comment: 'Este campo informa o id do produto pai, ou seja, se houver um valor aqui diferente de 0, este é um subproduto'
}), _dec(_class = (_class2 = class ModelInfoProducts extends _sequelizeTypescript.Model {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "title", _descriptor2, this);

    _initializerDefineProperty(this, "about", _descriptor3, this);

    _initializerDefineProperty(this, "category", _descriptor4, this);

    _initializerDefineProperty(this, "financialResource", _descriptor5, this);

    _initializerDefineProperty(this, "subCategory", _descriptor6, this);

    _initializerDefineProperty(this, "thumbnail", _descriptor7, this);

    _initializerDefineProperty(this, "link", _descriptor8, this);

    _initializerDefineProperty(this, "location", _descriptor9, this);

    _initializerDefineProperty(this, "cpf_cnpj", _descriptor10, this);

    _initializerDefineProperty(this, "idUser", _descriptor11, this);

    _initializerDefineProperty(this, "idInstitution", _descriptor12, this);

    _initializerDefineProperty(this, "idUserRegistered", _descriptor13, this);

    _initializerDefineProperty(this, "createdAt", _descriptor14, this);

    _initializerDefineProperty(this, "updatedAt", _descriptor15, this);

    _initializerDefineProperty(this, "active", _descriptor16, this);

    _initializerDefineProperty(this, "existSubProd", _descriptor17, this);

    _initializerDefineProperty(this, "idSubProd", _descriptor18, this);
  }

  get params() {
    return {
      id: this.id,
      title: this.title,
      about: this.about,
      category: this.category,
      subCategory: this.subCategory,
      link: this.link,
      cpf_cnpj: this.cpf_cnpj,
      idUser: this.idUser,
      idUserRegistered: this.idUserRegistered,
      financialResource: this.financialResource,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      active: this.active,
      idInstitution: this.idInstitution,
      location: this.location,
      thumbnail: this.thumbnail,
      existSubProd: this.existSubProd,
      idSubProd: this.idSubProd
    };
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "about", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "category", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "financialResource", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "subCategory", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "thumbnail", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "link", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "location", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "cpf_cnpj", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "idUser", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "idInstitution", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "idUserRegistered", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "createdAt", [_dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "updatedAt", [_dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "active", [_dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "existSubProd", [_dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "idSubProd", [_dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = ModelInfoProducts;
exports.default = _default;