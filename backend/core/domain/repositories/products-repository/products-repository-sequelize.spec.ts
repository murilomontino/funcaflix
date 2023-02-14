import { build } from 'mapacultural-database'
import { beforeAll, describe, expect, it } from 'vitest'

import { InvalidParamError, MissingParamError } from '@/domain/usecases/errors'
import { CATEGORIES } from '@/types/constants'
import { SequelizeProductsRepository } from './sequelize-products-repository'

const makeSut = async () => {
  const sut = new SequelizeProductsRepository()

  return {
    sut
  }
}
describe('Unit Test Cultural Products Repository', () => {

  beforeAll(async () => {
    await build()
  })
  it('should be defined', async () => {
    const { sut } = await makeSut()
    expect(sut).toBeDefined()
    expect(sut).toBeInstanceOf(SequelizeProductsRepository)
  })

  it('should be able to find all products (Integration)', async () => {
    const { sut } = await makeSut()
    const products = await sut.findAll()

    if (products.isRight()) {
      throw products.value
    }

    expect(products.isLeft()).toBeTruthy()
  })

  it('should be able to find all products by category (Integration)', async () => {
    const { sut } = await makeSut()
    const products = await sut.findAllProductsByCategory([CATEGORIES.AUDIOVISUAL, CATEGORIES.LITERATURE])

    if (products.isRight()) {
      throw products.value
    }

    const verify = products.value.every(product => {
      return product.category === parseInt(CATEGORIES.AUDIOVISUAL, 10)
        || product.category === parseInt(CATEGORIES.LITERATURE, 10)
    })

    expect(verify).toBeTruthy()
    expect(products.isLeft()).toBeTruthy()
  })

  it('should be able to find all products by user (Integration)', async () => {
    const { sut } = await makeSut()
    const products = await sut.findAllProductsByUser(1)

    if (products.isRight()) {
      throw products.value
    }

    const verify = products.value.every(product => {
      return product.idUser === 1
    })

    expect(verify).toBeTruthy()
    expect(products.isLeft()).toBeTruthy()
  })

  it('should be able to find all products by user and category (Integration)', async () => {
    const { sut } = await makeSut()
    const products = await sut.findAllProductsByUserAndCategory(
      1,
      [CATEGORIES.AUDIOVISUAL, CATEGORIES.LITERATURE]
    )

    if (products.isRight()) {
      throw products.value
    }

    const verify = products.value.every(product => {
      return product.idUser === 1
        && (product.category === parseInt(CATEGORIES.AUDIOVISUAL, 10)
          || product.category === parseInt(CATEGORIES.LITERATURE, 10))
    })

    expect(verify).toBeTruthy()
    expect(products.isLeft()).toBeTruthy()
  })

  it('should throw error if not pass categories (Unitary)', async () => {
    const { sut } = await makeSut()

    const errIfNull = await sut.findAllProductsByCategory(null)
    const errIfUndefined = await sut.findAllProductsByCategory(undefined)
    const errIfEmpty = await sut.findAllProductsByCategory([])
    const errIfInvalid = await sut.findAllProductsByCategory(['invalid'] as unknown as CATEGORIES[])

    expect(errIfNull.isRight()).toBeTruthy()
    expect(errIfNull.value).toBeInstanceOf(MissingParamError)
    expect(errIfUndefined.isRight()).toBeTruthy()
    expect(errIfUndefined.value).toBeInstanceOf(MissingParamError)
    expect(errIfEmpty.isRight()).toBeTruthy()
    expect(errIfEmpty.value).toBeInstanceOf(MissingParamError)
    expect(errIfInvalid.isRight()).toBeTruthy()
    expect(errIfInvalid.value).toBeInstanceOf(InvalidParamError)

  })

  it('should throw error if not pass user id (Unitary)', async () => {
    const { sut } = await makeSut()

    const errIfNull = await sut.findAllProductsByUser(null)
    const errIfUndefined = await sut.findAllProductsByUser(undefined)

    expect(errIfNull.isRight()).toBeTruthy()
    expect(errIfNull.value).toBeInstanceOf(MissingParamError)
    expect(errIfUndefined.isRight()).toBeTruthy()
    expect(errIfUndefined.value).toBeInstanceOf(MissingParamError)

  })

  it('should throw error if not pass user id and categories (Unitary)', async () => {
    const { sut } = await makeSut()

    const errIfNull = await sut.findAllProductsByUserAndCategory(null, [CATEGORIES.AUDIOVISUAL])
    const errIfUndefined = await sut.findAllProductsByUserAndCategory(undefined, [CATEGORIES.AUDIOVISUAL])
    const errIfEmpty = await sut.findAllProductsByUserAndCategory(1, [])
    const errIfInvalid = await sut.findAllProductsByUserAndCategory(1, ['invalid'] as unknown as CATEGORIES[])

    expect(errIfNull.isRight()).toBeTruthy()
    expect(errIfNull.value).toBeInstanceOf(MissingParamError)
    expect(errIfUndefined.isRight()).toBeTruthy()
    expect(errIfUndefined.value).toBeInstanceOf(MissingParamError)
    expect(errIfEmpty.isRight()).toBeTruthy()
    expect(errIfEmpty.value).toBeInstanceOf(MissingParamError)
    expect(errIfInvalid.isRight()).toBeTruthy()
    expect(errIfInvalid.value).toBeInstanceOf(InvalidParamError)

  })
})
