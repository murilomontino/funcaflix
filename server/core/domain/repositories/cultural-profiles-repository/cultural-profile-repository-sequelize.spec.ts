import { beforeAll, beforeEach, describe, expect, it } from 'vitest'

import { database } from 'mapacultural-database'

import { CulturalProfileRepositorySequelize } from './cultural-profile-repository-sequelize'

describe('Unit Test Cultural Profile Repository', () => {
	let instance: CulturalProfileRepositorySequelize

	beforeAll(async () => {
		await database.sync()
	})

	beforeEach(() => {
		instance = new CulturalProfileRepositorySequelize(database)
	})

	it('should instance of CulturalProfileRepositor', () => {
		expect(instance).toBeInstanceOf(CulturalProfileRepositorySequelize)
	})

	it('should return not error find all by city (Integration)', async () => {
		const result = await instance.findAllByCity()
		expect(result.isLeft()).toBeTruthy()
	})
	it('should return not error find all by segment (Integration)', async () => {
		const result = await instance.findAllBySegment()
		expect(result.isLeft()).toBeTruthy()
	})
	it('should return find all by segment array object (Integration)', async () => {
		const result = await instance.findAllBySegment()
		expect(result.value[0]).toEqual({
			segment: expect.any(String),
			items: expect.any(Array),
		})
	})
	it('should return find by id profile (Integration)', async () => {
		const result = await instance.findById(1)
		if (result.isRight()) {
			return console.log(result.extract())
		}

		expect(result.value.id).toBeDefined()
	})
	it('should return find by id 400 profile (Integration)', async () => {
		const result = await instance.findById(400)
		if (result.isRight()) {
			return console.log(result.extract())
		}

		expect(result.value.id).toBeDefined()
	})
	it('should return find by id 1129 profile (Integration)', async () => {
		const result = await instance.findById(1129)
		if (result.isRight()) {
			return console.log(result.extract())
		}

		expect(result.value.id).toBeDefined()
	})
})