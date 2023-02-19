import { describe, expect, expectTypeOf, it, vi } from 'vitest'

import { DatabaseMock } from '@/__mocks__'
import { SequelizeEventsRepository } from '@/domain/repositories'
import { IGetterEvent } from '@/types/getters'
import { database } from 'mapacultural-database'

import { FindAllEventsByIDUseCase } from './find-all-events-by-id-use-case'

const makeSut = (db = database, repo = null) => {
	const repository = repo || new SequelizeEventsRepository(db)
	const sut = new FindAllEventsByIDUseCase(repository)

	return {
		sut,
	}
}

describe('Test Use Case Find All Events By Id', () => {
	it('should return events by id user (Integration)', async () => {
		const { sut } = makeSut()
		const eventsOrErr = await sut.execute(undefined, { id: '1' })

		if (eventsOrErr.isRight()) {
			return console.log(eventsOrErr.extract())
		}

		expect(eventsOrErr.isLeft()).toBeTruthy()
		expectTypeOf(eventsOrErr.extract()).toEqualTypeOf<IGetterEvent>()
	})

	it('should return events by id user (Unitary)', async () => {
		const db = new DatabaseMock({}) as any
		const { sut } = makeSut(db)
		const eventsOrErr = await sut.execute(undefined, { id: '1' })

		if (eventsOrErr.isRight()) {
			return console.log(eventsOrErr.extract())
		}

		expect(eventsOrErr.isLeft()).toBeTruthy()
		expectTypeOf(eventsOrErr.extract()).toEqualTypeOf<IGetterEvent>()
	})

	it('should throw err repository this is right by database (Unitary)', async () => {
		const db = new DatabaseMock({
			query: vi.fn().mockRejectedValue(new Error('Error Query Database')),
		}) as any

		const { sut } = makeSut(db)
		const eventsOrErr = await sut.execute(undefined, { id: '1' })

		if (eventsOrErr.isLeft()) {
			return console.log(eventsOrErr.extract())
		}

		expect(eventsOrErr.isRight()).toBeTruthy()
	})

	it('should throw err case id is invalid (Unitary)', async () => {
		const { sut } = makeSut()
		const err = await sut.execute(undefined, { id: 'invalid' })
		expect(err.isRight()).toBeTruthy()
	})
	it('should throw err case id is null (Unitary)', async () => {
		const { sut } = makeSut()
		const err = await sut.execute(undefined, { id: null })

		expect(err.isRight()).toBeTruthy()
	})
	it('should throw err case id is empty (Unitary)', async () => {
		const { sut } = makeSut()
		const err = await sut.execute(undefined, { id: '' })

		expect(err.isRight()).toBeTruthy()
	})
	it('should throw err case id is undefined (Unitary)', async () => {
		const { sut } = makeSut()
		const err = await sut.execute(undefined, { id: undefined })
		expect(err.isRight()).toBeTruthy()
	})
})
