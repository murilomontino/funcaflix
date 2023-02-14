import { build } from 'mapacultural-database'
import { beforeAll, describe, expect, it } from 'vitest'

import { IProductsRepository, SequelizeProductsRepository } from '@/domain/repositories/products-repository'
import { CATEGORIES } from '@/types/constants'
import { FindAllProductsByCategoryAndUser } from './find-all-products-by-category-and-user'

const makeSut = (
    category: CATEGORIES = CATEGORIES.AUDIOVISUAL,
    repo?: IProductsRepository
) => {

    const repository = repo || new SequelizeProductsRepository()

    const sut = new FindAllProductsByCategoryAndUser(category, repository)

    return {
        sut,
        repository
    }
}

describe('test FindAllProductsByCategoryAndUser', () => {
    beforeAll(async () => {
        await build()
    })

    it('should instantiate FindAllProductsByCategoryAndUser (Unitary)', () => {
        const { sut } = makeSut()
        expect(sut).toBeTruthy()
        expect(sut).toBeInstanceOf(FindAllProductsByCategoryAndUser)
    })

    it('should categories be equal to CATEGORIES.AUDIOVISUAL (Unitary)', () => {
        const { sut } = makeSut()
        expect(sut.category).toBe(CATEGORIES.AUDIOVISUAL)
    })

    it('should return a list of products (Integration)', async () => {
        const { sut } = makeSut()
        const products = await sut.execute({}, { idUser: 1 })
        expect(products.isLeft()).toBeTruthy()
        expect(products.extract()).toBeInstanceOf(Array)
    })
})
