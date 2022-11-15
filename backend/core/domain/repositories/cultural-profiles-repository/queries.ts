const QUERY_DEFAULT = `
SELECT 
    u.id, 
    u.nome as name, 
    u.tipo as type, 
    s.segmento as segment, 
    s.atuacao as acting,
    s.informacoes as about, 
    s.web_site as website, 
    s.you_tube as youtube, 
    s.twitter, 
    s.facebook, 
    s.instagram,
    d.arquivo as thumbnail,
    b.arquivo as banner,
    s.hashtags as hashtags,
    e.localidade as city,
    e.uf,
    c.email2 as email,
    c.telefone_02 as phone
  FROM 
    usuario as u 
    JOIN 
      sobre as s ON(u.id=s.id_usuario)
    JOIN
   	  documentacao as d ON(u.id=d.id_usuario AND d.tipo=10)
    JOIN
      documentacao as b ON(u.id=b.id_usuario AND b.tipo=11)
    JOIN 
      endereco as e ON(u.id=e.id_usuario)
    JOIN 
      contato as c ON(u.id=c.id_usuario)
`
export const QUERY_CULTURAL_PROFILE = `
  ${QUERY_DEFAULT}
  ORDER BY RAND()
  LIMIT 500;
`

export const QUERY_CULTURAL_PROFILE_BY_ID = (id: number) => `
  ${QUERY_DEFAULT}
  WHERE u.id=${id};
`

export const QUERY_CULTURAL_PROFILE_BY_SEGMENT = (segment: string) => `
  ${QUERY_DEFAULT}
  WHERE 
    s.segmento='${segment}' AND u.ativo=1
  ORDER BY RAND()
  LIMIT 20;
`
export const QUERY_CULTURAL_PROFILE_RAND = (length = 20) => `
  ${QUERY_DEFAULT}
  ORDER BY RAND()
  LIMIT ${length};
`

export const QUERY_CULTURAL_PROFILE_BY_CITY = (city: string) => `
  ${QUERY_DEFAULT}
  WHERE 
    e.localidade='${city}' AND u.ativo=1
  ORDER BY RAND()
  LIMIT 20;
`

export const QUERY_GROUP_BY_SEGMENT = `
SELECT segmento as segment FROM sobre GROUP BY segmento;
`

export const QUERY_GROUP_BY_CITY = `
SELECT localidade as city FROM endereco GROUP BY localidade;
`