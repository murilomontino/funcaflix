const QUERY_DEFAULT = `
SELECT 
    e.id,
    e.id_produto as idProduct,
    e.tipo_evento as typeEvent,
    e.assunto as subject,
    e.nome_local as local,
    e.cep,
    e.ed_rua as address,
    e.numero as number,
    e.complemento as complement,
    e.bairro as neighborhood,
    e.cidade as city,
    e.estado as uf,
  	e.data_inicio as dateStart,
    e.data_fim as dateEnd,
    e.hora_inicio as hourStart,
    e.hora_fim as hourEnd,
    e.data_cadastro as createdAt,
    p.titulo as title,
    p.sobre as about,
    p.imagem_divulgacao as thumbnail,
    p.categoria as category,
    p.subcategoria as subCategory,
    p.link,
    p.cpf_cnpj,
    p.id_usuario as idUser,
    p.id_usuario_cadastrou as idUserRegistered,
    p.ativo as active,
    p.data_atualizacao as updatedAt,
    p.existe_sub_prod as existSubProd,
    p.id_sub_produto as idSubProd
  FROM 
    evento as e
    JOIN 
      produtos as p ON(e.id_produto=p.id)
`
export const QUERY_EVENTS = `
  ${QUERY_DEFAULT}
  ORDER BY RAND()
  LIMIT 500;
`

export const QUERY_EVENTS_BY_ID = (id: number) => `
  ${QUERY_DEFAULT}
  WHERE e.id=${id};
`

export const QUERY_EVENTS_BY_USER_ID = (id: number) => `
  ${QUERY_DEFAULT}
  WHERE p.id_usuario=${id};
`

// export const QUERY_EVENTS_BY_LOCAL = (city: string) => `
//   ${QUERY_DEFAULT}
//   WHERE
//     e.nome_local='${city}' AND p.active=1
//   ORDER BY RAND()
//   LIMIT 20;
// `

// export const QUERY_EVENTS_SEARCH = (search: string) => `
//   ${QUERY_DEFAULT}
//   WHERE
//     e.nome LIKE '%${search}%' OR
//     e.assunto LIKE '%${search}%' OR
//     e.nome_local LIKE '%${search}%';
// `
