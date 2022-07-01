export const SELECT_ARTISTS = {
	CPF: 'artistas.cpf',
	CNPJ: 'artistas.cnpj',
	NOME_CULTURAL: 'artistas.nome_cultural',
	BIOGRAFIA: 'artistas.biografia',
	IMG_PERFIL: 'artistas.img_perfil',
}

export const SELECT_PRODUCT = {
	//PRODUTOID: 'produtos.id as produtoId',
	CATEGORIA: 'produtos.categoria',
	LINK: 'produtos.link',
	SOBRE_A_OBRA: 'produtos.sobre_a_obra',
	RECURSO: 'produtos.recurso',
	PATROCINADORES: 'produtos.patrocinadores',
	FICHATECNICA: 'produtos.fichaTecnica',
	DATA_CADASTRO: 'produtos.data_cadastro',
}

export const SELECT_YOUTUBE = {
	YOUTUBEID: 'youtubes.id as youtubeId',
	VIDEOID: 'youtubes.videoId',
	CHANNELID: 'youtubes.channelId',
	THUMBNAILYT: 'youtubes.thumbnailYt',
	URL: 'youtubes.url',
	PRIVACYSTATUS: 'youtubes.privacyStatus',
	PUBLISHEDAT: 'youtubes.publishedAt',
	CATEGORYYOUTUBE: 'youtubes.categoryYoutube',
}

export const SELECT_THUMBNAIL = (thumbnail: string) =>
	`${thumbnail}.arquivo as ${thumbnail}`

export const SELECT_DOC = (doc: string) => `
	${doc}.arquivo as ${doc}
`
