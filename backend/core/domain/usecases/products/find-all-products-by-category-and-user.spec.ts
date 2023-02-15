import { beforeAll, describe, expect, it } from 'vitest'

import { IProductsRepository, InMemoryProductsRepository, SequelizeProductsRepository } from '@/domain/repositories/products-repository'
import { CATEGORIES } from '@/types/constants'
import { build } from 'mapacultural-database'


import { MissingParamError } from '../errors'
import { FindAllProductsByCategoryAndUser } from './find-all-products-by-category-and-user'

type PropsSut = {
    category?: CATEGORIES
    repository?: IProductsRepository
} | undefined

const makeSut = ({
    category = CATEGORIES.AUDIOVISUAL,
    repository = new InMemoryProductsRepository()
}: PropsSut) => {

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
        const { sut } = makeSut({})
        expect(sut).toBeTruthy()
        expect(sut).toBeInstanceOf(FindAllProductsByCategoryAndUser)
    })

    it('should categories be equal to CATEGORIES.AUDIOVISUAL (Unitary)', () => {
        const { sut } = makeSut({})
        expect(sut.category).toBe(CATEGORIES.AUDIOVISUAL)
    })

    it('should return a list of products (Integration)', async () => {
        const { sut } = makeSut({ repository: new SequelizeProductsRepository() })
        const products = await sut.execute({}, { idUser: 1 })
        expect(products.isLeft()).toBeTruthy()
        expect(products.extract()).toBeInstanceOf(Array)
    })

    it('should return error if idUser is not provided (Integration)', async () => {
        const { sut } = makeSut({ repository: new SequelizeProductsRepository() })
        const errIsNull = await sut.execute({}, { idUser: null })
        expect(errIsNull.isRight()).toBeTruthy()
        expect(errIsNull.value).toBeInstanceOf(MissingParamError)

        const errIsUndefined = await sut.execute({}, { idUser: undefined })
        expect(errIsUndefined.isRight()).toBeTruthy()
        expect(errIsUndefined.value).toBeInstanceOf(MissingParamError)

        const errIsEmpty = await sut.execute({}, { idUser: '' as unknown as number })
        expect(errIsEmpty.isRight()).toBeTruthy()
        expect(errIsEmpty.value).toBeInstanceOf(MissingParamError)

        const errIsNaN = await sut.execute({}, { idUser: NaN as unknown as number })
        expect(errIsNaN.isRight()).toBeTruthy()
        expect(errIsNaN.value).toBeInstanceOf(MissingParamError)

        const errIsNotDefined = await sut.execute({}, {})
        expect(errIsNotDefined.isRight()).toBeTruthy()
        expect(errIsNotDefined.value).toBeInstanceOf(MissingParamError)
    })
})
