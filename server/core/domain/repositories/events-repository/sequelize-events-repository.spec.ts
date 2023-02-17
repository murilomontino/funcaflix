import { describe, expect, it } from 'vitest'
import { SequelizeEventsRepository } from './sequelize-events-repository'

const makeSut = async () => {
    const sut = new SequelizeEventsRepository()

    return {
        sut
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
})