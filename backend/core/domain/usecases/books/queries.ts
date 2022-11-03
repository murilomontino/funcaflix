const QUERY_DEFAULT = `
     SELECT 
        l.id,
        l.documento_id as idDocument,
        l.autor as author,
        l.titulo as title,
        l.sub_titulo as subTitle,
        l.isbn,
        l.editora as publisher,
        l.data_de_publicacao as publicationDate,
        l.numero_de_paginas as numberOfPages,
        l.dimensoes as dimensions,
        l.sinopse as synopsis,
        l.ilustracao as illustration,
        l.ilustrador as illustrator,
        l.generos as genres,
        l.tags, 
        (SELECT t.arquivo FROM doc_produto as t WHERE l.produto_id=t.id_produto AND t.tipo=104) as thumbnail,
        (SELECT d.arquivo FROM doc_produto as d WHERE l.documento_id=d.id AND d.tipo=10) as pdf
    FROM 
        livros as l
`

export const QUERY_ALL_BOOKS = QUERY_DEFAULT + ';'

export const QUERY_GETTER_ID_BOOK = (id: string | number) => `
    ${QUERY_DEFAULT}
    WHERE 
        l.id=${id}
`