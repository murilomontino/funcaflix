export const GROUP_TAGS = `GROUP_CONCAT(tags.tag) tags`

export const GROUP_GENEROS = `GROUP_CONCAT(generos.genero) generos`

export const GROUP_BY_ID = (table: string) => `GROUP BY ${table}.id`
