"use strict";

var _build = require("./build");

var _artistas = _interopRequireDefault(require("./json/artistas.json"));

var _documentos_de_produto = _interopRequireDefault(require("./json/documentos_de_produto.json"));

var _livros = _interopRequireDefault(require("./json/livros.json"));

var _produtos = _interopRequireDefault(require("./json/produtos.json"));

var _models = _interopRequireDefault(require("./models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

async function scriptBooks() {
  await (0, _build.build)();

  for await (const livro of _livros.default.data) {
    const produto = _produtos.default.data.find(p => p.id === livro.produtoId);

    const artista = _artistas.default.data.find(a => a.cpf === produto.cpf);

    const pdf = _documentos_de_produto.default.data.find(doc => doc.produtoId === livro.produtoId && doc.tipo_de_arquivo === '3');

    const capa = _documentos_de_produto.default.data.filter(doc => doc.tipo_de_arquivo === '4' && doc.produtoId === livro.produtoId)[0];

    const authorModel = (() => artista && {
      about: artista?.biografia || 'Não Informado',
      idProduct: parseInt(livro.produtoId),
      cpf_cnpj: artista?.cpf || produto?.cpf || artista?.cnpj || produto?.cnpj || 'Não Informado',
      name: artista?.nome_cultural,
      responsible: true,
      personFunction: 22
    })();

    const illustratorModel = (() => livro.ilustrador && {
      about: '',
      idProduct: parseInt(livro.produtoId),
      name: livro.ilustrador,
      responsible: false,
      personFunction: 23
    })();

    const thumbnailModel = (() => capa && {
      filePath: `imagens/${capa.arquivo}`,
      idProduct: parseInt(livro.produtoId),
      title: `Capa da Obra ${livro.titulo}`,
      type: 104
    })();

    const pdfModel = (() => pdf && {
      filePath: `livros/${pdf.arquivo}.pdf`,
      idProduct: parseInt(livro.produtoId),
      title: `PDF da Obra ${livro.titulo}`,
      type: 10
    })();

    const productModel = {
      category: 2,
      cpf_cnpj: artista?.cpf || produto?.cpf || artista?.cnpj || produto?.cnpj || 'Não Informado',
      financialResource: 105,
      subCategory: 10,
      title: livro.titulo,
      about: livro.sinopse,
      active: true,
      createdAt: new Date(produto.data_cadastro),
      location: 'Funcap',
      thumbnail: thumbnailModel?.filePath,
      id: parseInt(livro.produtoId)
    };
    const bookModel = {
      id: parseInt(livro.id),
      author: livro.autor || artista.nome_cultural,
      title: livro.titulo,
      subTitle: livro.subTitulo || '',
      isbn: livro.isbn_13 || livro.isbn_10,
      publisher: livro.editora || '',
      publicationDate: livro.data_de_publicacao || '',
      dimensions: livro.dimensoes || '',
      illustration: !!livro.ilustracao,
      illustrator: livro.ilustrador || '',
      synopsis: livro.sinopse || '',
      numberOfPages: livro.numero_de_paginas || '',
      idDocument: 0,
      idProduct: parseInt(livro.produtoId)
    };

    if (pdfModel) {
      const insert = await _models.default.ModelDocsProducts.create(pdfModel);
      await _models.default.ModelBooks.create({ ...bookModel,
        idDocument: insert.id
      });
    } else {
      await _models.default.ModelBooks.create(bookModel);
    }

    authorModel && (await _models.default.ModelDataSheetProducts.create(authorModel));
    illustratorModel && (await _models.default.ModelDataSheetProducts.create(illustratorModel));
    thumbnailModel && (await _models.default.ModelDocsProducts.create(thumbnailModel));
    productModel && (await _models.default.ModelInfoProducts.create(productModel));
  }

  console.log('DONE');
}

async function main() {
  await (0, _build.build)();
  const products = await _models.default.ModelInfoProducts.findAll();
  console.log(products);
}

main();