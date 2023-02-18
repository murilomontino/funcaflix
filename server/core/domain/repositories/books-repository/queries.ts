const QUERY_DEFAULT = `
SELECT 
	l.id,
  l.id_produto as idProduct,
  l.arquivo as pdf,
  l.sub_titulo as subTitle,
  l.numero_de_paginas as numberOfPages,
  l.dimensoes as dimensions,
  l.editora as publisher,
  l.ilustracao as illustration,
  l.generos as genres,
  l.tags as tags,
  p.titulo as title,
  p.sobre as synopsis,
  p.imagem_divulgacao as thumbnail
FROM 
	literatura as l
	JOIN produtos as p ON(l.id_produto=p.id)
`

export const QUERY_ALL_BOOKS = `
  ${QUERY_DEFAULT};
`
