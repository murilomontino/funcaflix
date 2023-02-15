import { CATEGORIES } from "@/types/constants"

type WhereType = {
    [key: string]: unknown
}

export type Params = {
    category: string | string[]
    limit?: number
    where?: WhereType
    idUser?: string
}

async function configWhere(params: Params) {

    const { where, idUser } = params

    const mapWhere = new Map()
    idUser && mapWhere.set('idUser', parseInt(idUser, 10))

    if (!where) {
        return mapWhere
    }

    Object.keys(params).map((key) => {
        if (!!params[key]) {
            mapWhere.set(key, params[key])
        }
    })

    return mapWhere
}

async function config(params: Params) {
    const mapConfig = new Map()
    params.limit && mapConfig.set('limit', params.limit)

    return mapConfig
}

async function categoriesInArray(
    category: string | string[],
    categoryDefault: CATEGORIES = null
): Promise<[boolean, number[]]> {
    const categoryArrayString = Array.isArray(category) ? category : [category]
    const categoryArrayInt = categoryArrayString.map((category) => parseInt(category, 10))

    categoryDefault && categoryArrayInt.push(parseInt(this.categoryDefault.toString(), 10))

    const isInArray = Object.values(CATEGORIES).some((type) =>
        categoryArrayInt.includes(parseInt(type.toString(), 10))
    )

    return [isInArray, categoryArrayInt]
}

export {
    config,
    configWhere,
    categoriesInArray,
}
