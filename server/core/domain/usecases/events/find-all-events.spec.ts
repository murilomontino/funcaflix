import { SequelizeEventsRepository } from '@/domain/repositories'
import { database } from 'mapacultural-database'
import { describe, expect, it, vi } from 'vitest'
import { FindAllEventsUseCase } from './find-all-events-use-case'

import { DatabaseMock } from '@/__mocks__'

const makeSut = (db = database, repo = null) => {
    const repository = repo || new SequelizeEventsRepository(db)
    const sut = new FindAllEventsUseCase(repository)

    return {
        sut
    }
}

describe('Test Use Case Find All Events', () => {
    it('should return a list of events (Integration)', async () => {
        const { sut } = makeSut()
        const eventsOrErr = await sut.execute()

        if (eventsOrErr.isRight()) {
            throw eventsOrErr.value
        }

        expect(eventsOrErr.isLeft()).toBeTruthy()
        expect(eventsOrErr.extract()).toBeInstanceOf(Array)
        expect(eventsOrErr.extract().length).toBeGreaterThan(0)
    })

    it('should return a list of events (Unitary)', async () => {
        const db = new DatabaseMock({}) as any
        const { sut } = makeSut(db)
        const eventsOrErr = await sut.execute()

        if (eventsOrErr.isRight()) {
            console.log(eventsOrErr.extract())
        }

        expect(eventsOrErr.isLeft()).toBeTruthy()
        expect(eventsOrErr.extract()).toBeInstanceOf(Array)
    })

    it('should throw err repository this is right (Unitary)', async () => {
        const db = new DatabaseMock(
            { query: vi.fn().mockRejectedValue(new Error('Error Query Database')) }
        ) as any

        const { sut } = makeSut(db)
        const eventsOrErr = await sut.execute()

        if (eventsOrErr.isLeft()) {
            console.log(eventsOrErr.extract())
        }

        expect(eventsOrErr.isRight()).toBeTruthy()
    })
})
