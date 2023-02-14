import { PromiseEither } from "@/shared/either";
import { CATEGORIES } from "@/types/constants";
import { IGetterProduct } from "@/types/getters";

type WhereTypeGeneric = {
    [key: string]: unknown
}

export type Params = {
    category: string | string[]
    limit?: number
    where?: WhereTypeGeneric
    idUser?: string
}

export type categories = CATEGORIES | CATEGORIES[]

export interface ProductsRepository {
    findAll(): PromiseEither<IGetterProduct[], Error>
    findAllProductsByCategory(categories: categories): PromiseEither<IGetterProduct[], Error>
    findAllProductsByUser(id: number): PromiseEither<IGetterProduct[], Error>
    findAllProductsByUserAndCategory(id: number, categories: categories): PromiseEither<IGetterProduct[], Error>
}