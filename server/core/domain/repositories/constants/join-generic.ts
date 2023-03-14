export const JOIN_ARTISTS = `
	JOIN
		artistas
	ON(
		produtos.cpf = artistas.cpf
		OR
		produtos.cnpj = artistas.cnpj
		)

`

export const JOIN_TAGS = `
	LEFT JOIN
		tags
	ON(
			produtos.id = tags.produtoId
		)
`

export const JOIN_GENRES = `
	LEFT JOIN
		generos
	ON(
			produtos.id = generos.produtoId
		)
`

type JOIN_SEQUELIZE = 'INNER' | 'LEFT' | 'RIGHT'

export const JOIN_PRODUCTS = ({
	table,
	join = 'LEFT',
}: {
	table: string
	join?: JOIN_SEQUELIZE
}) => `
	${join} JOIN
		produtos
	ON(
		${table}.produtoId = produtos.id
	)
`

export const JOIN_THUMBNAIL = ({
	thumbnail,
	join = 'INNER',
}: {
	thumbnail: string
	join?: JOIN_SEQUELIZE
}) => `
	${join} JOIN
		documentos_de_produto as ${thumbnail}
	ON
		(
				produtos.id = ${thumbnail}.produtoId
			AND
				${thumbnail}.tipo_de_arquivo = '11'
		)
`

export const JOIN_DOC = ({
	doc,
	type,
	join,
}: {
	doc: string
	type: any
	join?: JOIN_SEQUELIZE
}) => `
	${join} JOIN
		documentos_de_produto as ${doc}
	ON

		(
				produtos.id = ${doc}.produtoId
			AND
				${doc}.tipo_de_arquivo = '${type}'
		)
`

export const JOIN_YOUTUBE = `
		LEFT JOIN
			youtubes
		ON(
				produtos.id = youtubes.produtoId
			)
	`
