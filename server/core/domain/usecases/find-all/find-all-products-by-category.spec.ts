import { beforeAll, describe, expect, it } from 'vitest'

import { CATEGORIES } from '@/types/constants'
import { build } from 'mapacultural-database'

import { FindAllProductsByCategory } from './find-all-products-by-category'

const makeSut = (category: CATEGORIES = null) => {
	const sut = new FindAllProductsByCategory(category)

	return {
		sut,
	}
}

describe('test FindAllProductsByCategory', () => {
	beforeAll(async () => {
		try {
			await build()
		} catch (err) {
			console.log(err)
		}
	})

	it('should instantiate FindAllProductsByCategory (Unitary)', () => {
		const { sut } = makeSut()
		expect(sut).toBeTruthy()
		expect(sut).toBeInstanceOf(FindAllProductsByCategory)
	})

	it('should return an array of products (Integration)', async () => {
		const { sut } = makeSut()
		const products = await sut.execute(null, { category: CATEGORIES.AUDIO })
		expect(products.isLeft()).toBeTruthy()
		expect(products.value).toBeInstanceOf(Array)
	})
})
