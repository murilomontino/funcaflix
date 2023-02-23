import { describe, expect, it, vi } from 'vitest'

import { DatabaseMock } from '@/__mocks__'
import { SequelizeEventsRepository } from '@/domain/repositories'
import { FINANCIAL_RESOURCES } from '@/types/constants'
import { database } from 'mapacultural-database'

import { FindAllEventsByFinancialResourcesUseCase } from './find-all-events-by-financial-resources-use-case'

const makeSut = (db = database, repo = null) => {
	const repository = repo || new SequelizeEventsRepository(db)
	const sut = new FindAllEventsByFinancialResourcesUseCase(repository)

	return {
		sut,
	}
}

describe('Test Use Case Find All Events By Financial Resources', () => {
	it('should return a list of events by financial resource (Integration)', async () => {
		const { sut } = makeSut()
		const eventsOrErr = await sut.execute(undefined, {
			financialResources: FINANCIAL_RESOURCES['lei-aldir-blanc'],
		})

		if (eventsOrErr.isRight()) {
			return console.log(eventsOrErr.extract())
		}

		expect(eventsOrErr.isLeft()).toBeTruthy()
		expect(eventsOrErr.extract()).toBeInstanceOf(Array)
		expect(eventsOrErr.extract().length).toBeGreaterThan(0)
	})

	it('should return a list of events by financial resource (Unitary)', async () => {
		const db = new DatabaseMock({}) as any
		const { sut } = makeSut(db)
		const eventsOrErr = await sut.execute(undefined, {
			financialResources: FINANCIAL_RESOURCES['lei-aldir-blanc'],
		})

		if (eventsOrErr.isRight()) {
			return console.log(eventsOrErr.extract())
		}

		expect(eventsOrErr.isLeft()).toBeTruthy()
		expect(eventsOrErr.extract()).toBeInstanceOf(Array)
	})

	it('should throw err repository this is right by database (Unitary)', async () => {
		const db = new DatabaseMock({
			query: vi.fn().mockRejectedValue(new Error('Error Query Database')),
		}) as any

		const { sut } = makeSut(db)
		const eventsOrErr = await sut.execute(undefined, {
			financialResources: '1' as any,
		})

		if (eventsOrErr.isLeft()) {
			return console.log(eventsOrErr.extract())
		}

		expect(eventsOrErr.isRight()).toBeTruthy()
	})

	it('should throw err case financialResources is invalid (Unitary)', async () => {
		const { sut } = makeSut()
		const err = await sut.execute(undefined, {
			financialResources: 'invalid' as any,
		})
		expect(err.isRight()).toBeTruthy()
	})
	it('should throw err case financialResources is null (Unitary)', async () => {
		const { sut } = makeSut()
		const err = await sut.execute(undefined, { financialResources: null })

		expect(err.isRight()).toBeTruthy()
	})
	it('should throw err case financialResources is empty (Unitary)', async () => {
		const { sut } = makeSut()
		const err = await sut.execute(undefined, { financialResources: '' as any })

		expect(err.isRight()).toBeTruthy()
	})
	it('should throw err case financialResources is undefined (Unitary)', async () => {
		const { sut } = makeSut()
		const err = await sut.execute(undefined, { financialResources: undefined })
		expect(err.isRight()).toBeTruthy()
	})
})
