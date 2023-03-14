import { beforeAll, describe, expect, it } from 'vitest'

import { database } from 'mapacultural-database'

import { BookRepositorySequelize } from './books-repository-sequelize'

const makeSut = () => {
	const sut = new BookRepositorySequelize()
	return { sut }
}

describe('Cultural Books Repository (Unitary)', () => {
	beforeAll(async () => {
		await database.sync()
	})

	it('should be defined', () => {
		const { sut: instance } = makeSut()
		expect(instance).toBeDefined()
	})

	it('should be able to find all books', async () => {
		const { sut: instance } = makeSut()
		const books = await instance.findAll()
		expect(books.isLeft()).toBeTruthy()
	})

	it('should be able to find a book by id', async () => {
		const { sut } = makeSut()
		const book = await sut.findById('2')
		expect(book.isLeft()).toBeTruthy()
	})
})
