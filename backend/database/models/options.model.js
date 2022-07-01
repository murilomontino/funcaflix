"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

/* 
INSERT INTO `opcoes` (`id`, `label`, `tipo`) VALUES
(1, 'AudioVisual', 1),
(2, 'Livro', 1),
(3, 'Audio', 1),
(4, 'Evento', 1),
(5, 'Exposição', 1),
(6, 'Single', 2),
(7, 'Album', 2),
(8, 'Album Interprete', 2),
(9, 'Ep', 2),
(10, 'Livro', 3),
(11, 'Curta-Metragem', 4),
(12, 'Documentários', 4),
(13, 'Shows', 4),
(68, 'Evento presencial', 5),
(69, 'Live', 5),
(70, 'Videoconferência', 5),
(71, 'Desafio virtual esportivo', 5),
(72, 'Conteúdo digital', 5),
(14, 'Documento', 10),
(15, 'Link', 10),
(16, 'Foto de Artista', 10),
(17, 'Foto de Evento', 10),
(18, 'Foto de Local', 10),
(19, 'Demo', 30),
(20, 'Teaser', 30),
(21, 'Banner', 30),
(22, 'Autor(a)', 20), 
(23, 'Ilustrador(a)', 20),
(24, 'Diretor(a)', 20), 
(25, 'Cantor(a)', 20),
(26, 'Compositor(a)', 20),
(27, 'Produtor(a)', 20),
(28, 'Coordenador(a)', 20),
(62, 'Funcart', 60),
(63, 'Próprio', 60),
(64, 'Federal', 60),
(65, 'Municipal', 60),
(66, 'Estadual', 60),
(67, 'Outro Patrocínio', 60),
(100, 'Livro', 90),
(101, 'Música', 90),
(102, 'Video', 90),
(103, 'Obra', 90);
(104, 'Thumbnail', 10),
(105, 'Recurso Federal - Lei Aldir Blanc', 60),
(152, 'Programa de TV', '1');
*/
let ModelOptionsProduct = (_dec = (0, _sequelizeTypescript.Table)({
  tableName: 'opcoes',
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
  field: 'label',
  comment: 'Nome informado da label para uso no dropdown'
}), _dec4 = (0, _sequelizeTypescript.Column)({
  type: _sequelizeTypescript.DataType.TINYINT({
    length: 4
  }),
  allowNull: false,
  field: 'tipo',
  comment: `
    Tipo de Opção e seu significado: 
      1 - Categoria,
      2 - SubCategoria de Musicas,
      3 - Subcategoria de Livros,
      4 - SubCategorias de AudioVisual,
      5 - SubCategorias de Eventos,
      6 - SubCategorias de Exposições,
      10 - Tipo de Documentos Relacionados,
      20 - Funções de Pessoa na ficha técnica
      30 - Divulgação
      40 - Assuntos, eventos
      50 - Tipos de Eventos
      60 - Patrocínios
      90 - Produto Principal
      `
}), _dec(_class = (_class2 = class ModelOptionsProduct extends _sequelizeTypescript.Model {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "label", _descriptor2, this);

    _initializerDefineProperty(this, "type", _descriptor3, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
/* 
tipos de labes disponiveis: tipo 1 categorias tipo 2 subcategorias tipo 3 livros tipo 4 videos tipo 10 tipos de documentos relacionados tipo 20 funções ficha técnica tipo 30 divulgação tipo 40 assuntos eventos tipo 50 tipos de eventos
*/

var _default = ModelOptionsProduct;
exports.default = _default;