export const QUERY_CULTURAL_PROFILE = `
SELECT 
    u.id, 
    u.nome as name, 
    u.tipo as type, 
    u.cidade as city, 
    s.segmento as segment, 
    s.atuacao as acting, 
    s.informacoes as about, 
    s.web_site as website, 
    s.you_tube as youtube, 
    s.twitter, 
    s.facebook, 
    s.instagram,
    d.arquivo as thumbnail,
    b.arquivo as banner
  FROM 
    usuario as u 
    JOIN 
      sobre as s ON(u.id=s.id_usuario)
    JOIN
   	  documentacao as d ON(u.id=d.id_usuario AND d.tipo=10)
    JOIN
      documentacao as b ON(u.id=b.id_usuario AND b.tipo=11)
  ORDER BY RAND()
  LIMIT 500;
`

export const QUERY_CULTURAL_PROFILE_BY_ID = (id: number) => `
SELECT 
    u.id, 
    u.nome as name, 
    u.tipo as type, 
    u.cidade as city, 
    s.segmento as segment, 
    s.atuacao as acting, 
    s.informacoes as about, 
    s.web_site as website, 
    s.you_tube as youtube, 
    s.twitter, 
    s.facebook, 
    s.instagram,
    d.arquivo as thumbnail,
    b.arquivo as banner
  FROM 
    usuario as u 
    JOIN 
      sobre as s ON(u.id=s.id_usuario)
    JOIN
   	  documentacao as d ON(u.id=d.id_usuario AND d.tipo=10)
    JOIN
      documentacao as b ON(u.id=b.id_usuario AND b.tipo=11)
  WHERE u.id=${id};
`


//   `
//   SELECT 
//     u.id, 
//     u.nome as name, 
//     u.tipo as type, 
//     u.cidade as city, 
//     s.segmento as segment, 
//     s.atuacao as acting, 
//     s.informacoes as about, 
//     s.web_site as website, 
//     s.you_tube as youtube, 
//     s.twitter, 
//     s.facebook, 
//     s.instagram,
//     (SELECT d.arquivo FROM documentacao as d WHERE u.id=d.id_usuario AND d.tipo=10 LIMIT 1) as thumbnail
//   FROM 
//     usuario as u 
//     JOIN 
//       sobre as s ON(u.id=s.id_usuario)
//   ORDER BY 
//     s.segmento, s.atuacao
//   LIMIT 1000;
// `
