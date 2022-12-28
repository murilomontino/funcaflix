const QUERY_DEFAULT = `
    SELECT 
        l.id,
        p.titulo as title,
        l.sub_titulo as subTitle,
        l.editora as publisher,
        l.numero_de_paginas as numberOfPages,
        l.dimensoes as dimensions,
        p.sobre as synopsis,
        l.ilustracao as illustration,
        l.generos as genres,
        l.tags, 
        p.imagem_divulgacao as thumbnail,
        l.arquivo as pdf
    FROM 
        literatura as l 
       	JOIN 
        produtos as p ON(l.id_produto=p.id);
`

export const QUERY_ALL_BOOKS = QUERY_DEFAULT + ';'

export const QUERY_GETTER_ID_BOOK = (id: string | number) => `
    ${QUERY_DEFAULT}
    WHERE 
        l.id=${id}
`