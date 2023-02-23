import { describe, expect, it } from 'vitest'

import { faker } from '@faker-js/faker'

import promiseErrHandler from './error-handler'
import { isValid, isValidID } from './is-valid'

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

	it('should be valid value (Unitary)', () => {
		const word = faker.random.word()
		expect(isValid(word)).toBeTruthy()
	})

	it('should be invalid value (Unitary)', () => {
		const word = ''
		expect(isValid(word)).toBeFalsy()
	})

	it('should be valid id (Unitary)', () => {
		const id = parseInt(faker.random.numeric(2))
		expect(isValidID(id)).toBeTruthy()
	})

	it('should be invalid id (Unitary)', () => {
		const id = 0
		expect(isValidID(id)).toBeFalsy()
	})

	it('should be invalid id -1 (Unitary)', () => {
		const id = -1
		expect(isValidID(id)).toBeFalsy()
	})
})
