import { describe, expect, it, vi } from 'vitest'

import { DatabaseMock } from '@/__mocks__'
import { SequelizeEventsRepository } from '@/domain/repositories'
import { database } from 'mapacultural-database'

import { FindAllEventsByUserIDUseCase } from './find-all-events-by-idUser-use-case'

const makeSut = (db = database, repo = null) => {
	const repository = repo || new SequelizeEventsRepository(db)
	const sut = new FindAllEventsByUserIDUseCase(repository)

	return {
		sut,
	}
}

describe('Test Use Case Find All Events By Id User', () => {
	it('should return a list of events by id user (Integration)', async () => {
		const { sut } = makeSut()
		const eventsOrErr = await sut.execute(undefined, { idUser: '1' })

		if (eventsOrErr.isRight()) {
			return console.log(eventsOrErr.extract())
		}

		expect(eventsOrErr.isLeft()).toBeTruthy()
		expect(eventsOrErr.extract()).toBeInstanceOf(Array)
		expect(eventsOrErr.extract().length).toBeGreaterThan(0)
	})

	it('should return a list of events by id user (Unitary)', async () => {
		const db = new DatabaseMock({}) as any
		const { sut } = makeSut(db)
		const eventsOrErr = await sut.execute(undefined, { idUser: '1' })

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
		const eventsOrErr = await sut.execute(undefined, { idUser: '1' })

		if (eventsOrErr.isLeft()) {
			return console.log(eventsOrErr.extract())
		}

		expect(eventsOrErr.isRight()).toBeTruthy()
	})

	it('should throw err case idUser is invalid (Unitary)', async () => {
		const { sut } = makeSut()
		const err = await sut.execute(undefined, { idUser: 'invalid' })
		expect(err.isRight()).toBeTruthy()
	})
	it('should throw err case idUser is null (Unitary)', async () => {
		const { sut } = makeSut()
		const err = await sut.execute(undefined, { idUser: null })

		expect(err.isRight()).toBeTruthy()
	})
	it('should throw err case idUser is empty (Unitary)', async () => {
		const { sut } = makeSut()
		const err = await sut.execute(undefined, { idUser: '' })

		expect(err.isRight()).toBeTruthy()
	})
	it('should throw err case idUser is undefined (Unitary)', async () => {
		const { sut } = makeSut()
		const err = await sut.execute(undefined, { idUser: undefined })
		expect(err.isRight()).toBeTruthy()
	})
})
