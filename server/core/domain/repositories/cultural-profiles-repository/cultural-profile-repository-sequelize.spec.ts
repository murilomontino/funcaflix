import { beforeAll, describe, expect, it } from 'vitest'

import { database } from 'mapacultural-database'

import { CulturalProfileRepositorySequelize } from './cultural-profile-repository-sequelize'

import { faker } from '@faker-js/faker'

const makeSut = () => {
	const sut = new CulturalProfileRepositorySequelize(database)

	return {
		sut
	}
}

describe('Unit Test Cultural Profile Repository', () => {

	beforeAll(async () => {
		await database.sync()
	})

	it('should instance of CulturalProfileRepositor (Unitary)', () => {
		const { sut } = makeSut()
		expect(sut).toBeInstanceOf(CulturalProfileRepositorySequelize)
	})

	it('should return find all by city array object (Integration)', async () => {
		const { sut } = makeSut()

		const result = await sut.findAllByCity()
		expect(result.isLeft()).toBeTruthy()
		expect(result.extract()).toContainEqual({
			city: expect.any(String),
			items: expect.any(Array),
		})
	})

	it('should return find all by segment array object (Integration)', async () => {
		const { sut } = makeSut()

		const result = await sut.findAllBySegment()
		expect(result.isLeft()).toBeTruthy()
		expect(result.extract()).toContainEqual({
			segment: expect.any(String),
			items: expect.any(Array),
		})
	})

	it('should return find by id profile (Integration)', async () => {
		const { sut } = makeSut()
		const id = faker.random.numeric(4, { bannedDigits: ['0'] })
		const result = await sut.findById(Number(id))
		if (result.isRight()) {
			return console.log(result.extract())
		}

		expect(result.value.id).toBeDefined()
	})
})
