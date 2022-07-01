import {
	SELECT_ARTISTS,
	SELECT_PRODUCT,
	SELECT_YOUTUBE,
} from './select-generic'

export const SELECTS_VIDEOS = {
	...SELECT_PRODUCT,
	...SELECT_ARTISTS,
	...SELECT_YOUTUBE,
	//ID: 'videos.id',
	NOME_UNICO: 'videos.nome_unico',
	DOCUMENTO_ID: 'videos.documentoId',
	TITULO: 'videos.titulo',
	ARTISTA: 'videos.artista',
	CATEGORIA_DE_VIDEO: 'videos.categoria_de_video',
}

export const SELECTS_BOOKS = {
	...SELECT_PRODUCT,
	...SELECT_ARTISTS,
	TITULO: 'livros.titulo',
	SUBTITULO: 'livros.subTitulo',
	ISBN_13: 'livros.isbn_13',
	ISBN_10: 'livros.isbn_10',
	AUTOR: 'livros.autor',
	EDITORA: 'livros.editora',
	DATA_DE_PUBLICACAO: 'livros.data_de_publicacao',
	NUMERO_DE_PAGINAS: 'livros.numero_de_paginas',
	DIMENSOES: 'livros.dimensoes',
	SINOPSE: 'livros.sinopse',
	ILUSTRACAO: 'livros.ilustracao',
	ILUSTRADOR: 'livros.ilustrador',
}

export const SELECTS_EXHIBITIONS = {
	...SELECT_PRODUCT,
	...SELECT_ARTISTS,
	TITULO: 'exposicoes.titulo',
	NOME_UNICO: 'exposicoes.nome_unico',
	DATA_DE_INICIO: 'exposicoes.data_de_inicio',
	DATA_DE_FIM: 'exposicoes.data_de_fim',
	LOCAL: 'exposicoes.local',
	ARTISTA: 'exposicoes.artista',
}

export const SELECTS_PHOTOS_EXHIBITIONS = {
	TIPO_DE_FOTO: 'fotos_da_exposicao.tipo_de_foto',
	TITULO: 'fotos_da_exposicao.titulo',
	DESCRICAO: 'fotos_da_exposicao.descricao',
	DATA: 'fotos_da_exposicao.data',
	ARTISTA: 'fotos_da_exposicao.artista',
}

export const SELECTS_WORKS_EXHIBITIONS = {
	TITULO: 'obras_da_exposicao.titulo',
	ARTISTA: 'obras_da_exposicao.artista',
	TECNICA: 'obras_da_exposicao.tecnica',
	EDICAO: 'obras_da_exposicao.edicao',
	IMPRESSAO: 'obras_da_exposicao.impressao',
	MOLDURA: 'obras_da_exposicao.moldura',
	ANO: 'obras_da_exposicao.ano',
	DIMENSAO: 'obras_da_exposicao.dimensao',
	OBRA_ORIGINAL: 'obras_da_exposicao.obra_original',
}

export const SELECTS_ALBUMS = {
	...SELECT_PRODUCT,
	...SELECT_ARTISTS,
	NOME: 'album_musical.nome',
	NOME_UNICO: 'album_musical.nome_unico',
	TIPO: 'album_musical.tipo',
	DATA_DE_LANCAMENTO: 'album_musical.data_de_lancamento',
	ARTISTA: 'album_musical.artista',
}

export const SELECTS_TRACKS = {
	TITULO: 'faixa_musical.titulo',
	DURACAO: 'faixa_musical.duracao',
	COMPOSITOR: 'faixa_musical.compositor',
	ARTISTA: 'faixa_musical.artista',
}
