import { PromiseEither } from '@/shared/either'
import { CATEGORIES } from '@/types/constants'
import { IGetterProduct } from '@/types/getters'

import { IProductsRepository, categories } from './products-repository.interface'

export class InMemoryProductsRepository implements IProductsRepository {
    findAllByFinancialResourceAndCategory(financialResource: number, category: CATEGORIES): PromiseEither<IGetterProduct[], Error> {
        throw new Error('Method not implemented.')
    }
    findAll(): PromiseEither<IGetterProduct[], Error> {
        throw new Error('Method not implemented.')
    }
    findAllProductsByCategory(categories: categories): PromiseEither<IGetterProduct[], Error> {
        throw new Error('Method not implemented.')
    }
    findAllProductsByUser(id: number): PromiseEither<IGetterProduct[], Error> {
        throw new Error('Method not implemented.')
    }
    findAllProductsByUserAndCategory(id: number, categories: categories): PromiseEither<IGetterProduct[], Error> {
        throw new Error('Method not implemented.')
    }
}