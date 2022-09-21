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
    (SELECT d.arquivo FROM documentacao as d WHERE u.id=d.id_usuario AND d.tipo=10 LIMIT 1) as thumbnail
  FROM 
    usuario as u 
    JOIN 
      sobre as s ON(u.id=s.id_usuario) 
  ORDER BY 
    s.segmento, s.atuacao
  LIMIT 100;
`
