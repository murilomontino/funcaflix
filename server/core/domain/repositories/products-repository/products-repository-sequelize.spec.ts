import { beforeAll, describe, expect, it } from 'vitest'

import { InvalidParamError, MissingParamError } from '@/domain/usecases/errors'
import { CATEGORIES } from '@/types/constants'
import { build } from 'mapacultural-database'

import { SequelizeProductsRepository } from './sequelize-products-repository'

const makeSut = async () => {
	const sut = new SequelizeProductsRepository()

	return {
		sut,
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
		const products = await sut.findAllProductsByCategory([
			CATEGORIES.AUDIOVISUAL,
			CATEGORIES.LITERATURE,
		])

		if (products.isRight()) {
			throw products.value
		}

		const verify = products.value.every((product) => {
			return (
				product.category === parseInt(CATEGORIES.AUDIOVISUAL, 10) ||
				product.category === parseInt(CATEGORIES.LITERATURE, 10)
			)
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

		const verify = products.value.every((product) => {
			return product.idUser === 1
		})

		expect(verify).toBeTruthy()
		expect(products.isLeft()).toBeTruthy()
	})

	it('should be able to find all products by user and category (Integration)', async () => {
		const { sut } = await makeSut()
		const products = await sut.findAllProductsByUserAndCategory(1, [
			CATEGORIES.AUDIOVISUAL,
			CATEGORIES.LITERATURE,
		])

		if (products.isRight()) {
			throw products.value
		}

		const verify = products.value.every((product) => {
			return (
				product.idUser === 1 &&
				(product.category === parseInt(CATEGORIES.AUDIOVISUAL, 10) ||
					product.category === parseInt(CATEGORIES.LITERATURE, 10))
			)
		})

		expect(verify).toBeTruthy()
		expect(products.isLeft()).toBeTruthy()
	})

	it('should throw error if categories is null (Unitary)', async () => {
		const { sut } = await makeSut()
		const errIfNull = await sut.findAllProductsByCategory(null)
		expect(errIfNull.isRight()).toBeTruthy()
		expect(errIfNull.value).toBeInstanceOf(MissingParamError)
	})

	it('should throw error if categories is undefined (Unitary)', async () => {
		const { sut } = await makeSut()
		const err = await sut.findAllProductsByCategory(undefined)
		expect(err.isRight()).toBeTruthy()
		expect(err.value).toBeInstanceOf(MissingParamError)
	})

	it('should throw error if categories is empty (Unitary)', async () => {
		const { sut } = await makeSut()
		const err = await sut.findAllProductsByCategory([])
		expect(err.isRight()).toBeTruthy()
		expect(err.value).toBeInstanceOf(MissingParamError)
	})

	it('should throw error if categories is invalid (Unitary)', async () => {
		const { sut } = await makeSut()
		const err = await sut.findAllProductsByCategory([
			'invalid',
		] as unknown as CATEGORIES[])
		expect(err.isRight()).toBeTruthy()
		expect(err.value).toBeInstanceOf(InvalidParamError)
	})

	it('should throw error if user id is null (Unitary)', async () => {
		const { sut } = await makeSut()
		const errIfNull = await sut.findAllProductsByUser(null)
		expect(errIfNull.isRight()).toBeTruthy()
		expect(errIfNull.value).toBeInstanceOf(MissingParamError)
	})

	it('should throw error if user id is undefined (Unitary)', async () => {
		const { sut } = await makeSut()
		const err = await sut.findAllProductsByUser(undefined)
		expect(err.isRight()).toBeTruthy()
		expect(err.value).toBeInstanceOf(MissingParamError)
	})

	it('should throw error if user id is empty (Unitary)', async () => {
		const { sut } = await makeSut()
		const err = await sut.findAllProductsByUser(0)
		expect(err.isRight()).toBeTruthy()
		expect(err.value).toBeInstanceOf(MissingParamError)
	})

	it('should throw error if user id is null but only valid categories (Unitary)', async () => {
		const { sut } = await makeSut()
		const err = await sut.findAllProductsByUserAndCategory(null, [
			CATEGORIES.AUDIOVISUAL,
		])
		expect(err.isRight()).toBeTruthy()
		expect(err.value).toBeInstanceOf(MissingParamError)
	})

	it('should throw error if user id is undefined but only valid categories (Unitary)', async () => {
		const { sut } = await makeSut()
		const err = await sut.findAllProductsByUserAndCategory(undefined, [
			CATEGORIES.AUDIOVISUAL,
		])
		expect(err.isRight()).toBeTruthy()
		expect(err.value).toBeInstanceOf(MissingParamError)
	})

	it('should throw error if user id is empty but only valid categories (Unitary)', async () => {
		const { sut } = await makeSut()
		const err = await sut.findAllProductsByUserAndCategory(0, [
			CATEGORIES.AUDIOVISUAL,
		])
		expect(err.isRight()).toBeTruthy()
		expect(err.value).toBeInstanceOf(MissingParamError)
	})

	it('should throw error if user id is invalid but only valid categories (Unitary)', async () => {
		const { sut } = await makeSut()
		const err = await sut.findAllProductsByUserAndCategory(-1, [
			CATEGORIES.AUDIOVISUAL,
		])
		expect(err.isRight()).toBeTruthy()
		expect(err.value).toBeInstanceOf(MissingParamError)
	})

	it('should throw error if user id is valid but categories is null (Unitary)', async () => {
		const { sut } = await makeSut()
		const err = await sut.findAllProductsByUserAndCategory(1, null)
		expect(err.isRight()).toBeTruthy()
		expect(err.value).toBeInstanceOf(MissingParamError)
	})

	it('should throw error if user id is valid but categories is undefined (Unitary)', async () => {
		const { sut } = await makeSut()
		const err = await sut.findAllProductsByUserAndCategory(1, undefined)
		expect(err.isRight()).toBeTruthy()
		expect(err.value).toBeInstanceOf(MissingParamError)
	})

	it('should throw error if user id is valid but categories is empty (Unitary)', async () => {
		const { sut } = await makeSut()
		const err = await sut.findAllProductsByUserAndCategory(1, [])
		expect(err.isRight()).toBeTruthy()
		expect(err.value).toBeInstanceOf(InvalidParamError)
	})

	it('should throw error if user id is valid but categories is invalid (Unitary)', async () => {
		const { sut } = await makeSut()
		const err = await sut.findAllProductsByUserAndCategory(1, [
			'invalid',
		] as unknown as CATEGORIES[])
		expect(err.isRight()).toBeTruthy()
		expect(err.value).toBeInstanceOf(InvalidParamError)
	})
})
