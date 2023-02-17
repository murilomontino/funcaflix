import { faker } from '@faker-js/faker'
import { describe, expect, it } from 'vitest'
import promiseErrHandler from './error-handler'

describe('Test unitary helpers functions', () => {
    it('should be mock error promiseErrorHandler (Unitary)', async () => {
        const [err] = await promiseErrHandler(Promise.reject(new Error('Error')))
        expect(err).toBeDefined()
        expect(err).toBeInstanceOf(Error)
    })

    it('should be mock success promiseErrorHandler (Unitary)', async () => {
        const word = faker.random.word()
        const [err, data] = await promiseErrHandler(Promise.resolve(word))
        expect(err).toBeNull()
        expect(data).toBeDefined()
        expect(data).toBe(word)
    })
})