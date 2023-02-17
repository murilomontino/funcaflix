import { describe, expect, it, vi } from 'vitest'
import { SequelizeEventsRepository } from './sequelize-events-repository'


const makeSut = async () => {
    const sut = new SequelizeEventsRepository()

    return {
        sut
    }
}

const makeMock = async () => {
    vi.mock('mapacultural-database', () => ({
        database: {
            transaction: async (
                callback: (transaction: any) => Promise<any>
            ) => {
                return callback(null)
            },
            query: async (query, options) => {
                return [[], null]
            }
        }
    }))

    const sut = new SequelizeEventsRepository()

    const unmock = () => vi.unmock('mapacultural-database')

    return {
        sut,
        unmock
    }
}

describe('Test Events Repository', () => {

    it('should be defined (Unitary)', async () => {
        const { sut } = await makeSut()
        expect(sut).toBeDefined()
        expect(sut).toBeInstanceOf(SequelizeEventsRepository)
    })

    it('should be able to find all events (Integration)', async () => {
        const { sut } = await makeSut()
        const events = await sut.findAll()

        if (events.isRight()) {
            throw events.value
        }

        expect(events.isLeft()).toBeTruthy()
    })

    it('should be able to find all events by user id (Integration)', async () => {
        const { sut } = await makeSut()
        const events = await sut.findAllEventsByUserID(1)

        if (events.isRight()) {
            throw events.value
        }

        expect(events.isLeft()).toBeTruthy()
    })

    it('should be able find all events (Mock Database) (Unitary)', async () => {

        const { sut, unmock } = await makeMock()
        const events = await sut.findAll()

        if (events.isRight()) {
            throw events.value
        }

        expect(events.isLeft()).toBeTruthy()

        unmock()
    })
})