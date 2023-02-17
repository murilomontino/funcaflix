import { MissingParamError } from '@/domain/usecases/errors'
import { IGetterEvent } from '@/types/getters'
import { database } from 'mapacultural-database'
import { afterEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { SequelizeEventsRepository, generateEvent } from './sequelize-events-repository'

class DatabaseMock {

    transaction = async (callback: any) => {
        return await callback()
    }

    query = vi.fn().mockResolvedValue([[], null])
}


const makeSut = async (db = database) => {
    const sut = new SequelizeEventsRepository(db)

    return {
        sut
    }
}


describe('Test Events Repository (Integrations)', () => {

    afterEach(() => {
        vi.clearAllMocks()
    })

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
        expectTypeOf<IGetterEvent[]>(events.value)

    })

    it('should be able to find all events by user id (Integration)', async () => {
        const { sut } = await makeSut()
        const events = await sut.findAllEventsByUserID(1)

        if (events.isRight()) {
            throw events.value
        }

        expect(events.isLeft()).toBeTruthy()
        expectTypeOf<IGetterEvent[]>(events.value)

    })

    it('should be able find all events (Mock Database) (Unitary)', async () => {
        const database = new DatabaseMock() as any
        const { sut } = await makeSut(database)
        const events = await sut.findAll()

        if (events.isRight()) {
            throw events.value
        }
        expect(events.isLeft()).toBeTruthy()
        expectTypeOf<IGetterEvent[]>(events.value)

    })

    it('should be throw err find all events (Mock Database) (Unitary)', async () => {
        const database = new DatabaseMock() as any
        database.query = vi.fn().mockRejectedValue(new Error('Error Query Database'))

        const { sut } = await makeSut(database)
        const events = await sut.findAll()

        if (events.isLeft()) {
            throw events.value
        }

        expect(events.isRight()).toBeTruthy()

    })

    it('should be able find all events by user id (Mock Database) (Unitary)', async () => {
        const database = new DatabaseMock() as any
        const { sut } = await makeSut(database)
        const events = await sut.findAllEventsByUserID(1)

        if (events.isRight()) {
            throw events.value
        }

        expect(events.isLeft()).toBeTruthy()
        expectTypeOf<IGetterEvent[]>(events.value)
    })

    it('should be throw err find all events by user id (Mock Database) (Unitary)', async () => {
        const database = new DatabaseMock() as any
        database.query = vi.fn().mockRejectedValue(new Error('Error Query Database'))

        const { sut } = await makeSut(database)
        const events = await sut.findAllEventsByUserID(1)

        if (events.isLeft()) {
            throw events.value
        }

        expect(events.isRight()).toBeTruthy()

    })

    it('should be able find event by id (Mock Database) (Unitary)', async () => {
        const database = new DatabaseMock() as any
        const { sut } = await makeSut(database)
        const event = await sut.findEventByID(1)

        if (event.isRight()) {
            throw event.value
        }

        expect(event.isLeft()).toBeTruthy()
    })

    it('should be throw err find event by id (Mock Database) (Unitary)', async () => {
        const database = new DatabaseMock() as any
        database.query = vi.fn().mockRejectedValue(new Error('Error Query Database'))

        const { sut } = await makeSut(database)
        const event = await sut.findEventByID(1)

        if (event.isLeft()) {
            throw event.value
        }

        expect(event.isRight()).toBeTruthy()

    })

    it('should be IGettersEventDTO (Unitary)', async () => {
        const eventDTO = await generateEvent({} as any)
        expect(eventDTO).toBeDefined()
        expectTypeOf(eventDTO).toEqualTypeOf<IGetterEvent>()
    })

    it('should be IGettersEventDTO by get (Unitary)', async () => {
        const event = {
            get: vi.fn().mockReturnValue({
                id: 1,
                name: 'name',
            })
        }
        const eventDTO = await generateEvent(event as any)
        expectTypeOf(eventDTO).toEqualTypeOf<IGetterEvent>()
        expect(eventDTO).toBeDefined()
    })

    it('should be throw error fn generate event (Unitary)', async () => {
        expect(generateEvent(null as any)).rejects.toThrowError(MissingParamError)
        expect(generateEvent(undefined as any)).rejects.toThrowError(MissingParamError)
    })

})