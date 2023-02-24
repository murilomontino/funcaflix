import { describe, expect, expectTypeOf, it } from 'vitest'

import { futureDate, pastDate, presentDate } from '@/__mocks__'
import { FINANCIAL_RESOURCES, STATUS_DATE } from '@/types/constants'
import { faker } from '@faker-js/faker'

import { GetterEvent } from './getter-event'
const makeSut = () => {
	const event_example = {
		statusDate: undefined,
		id: faker.datatype.number(),
		address: faker.address.streetAddress(),
		cep: faker.address.zipCode(),
		city: faker.address.city(),
		complement: faker.address.secondaryAddress(),
		dateEnd: '13/07/2023',
		dateStart: '13/06/2022',
		hourEnd: '18:00',
		hourStart: '11:00',
		neighborhood: faker.address.county(),
		uf: faker.address.state(),
		thumbnail: '300.png',
		title: faker.lorem.sentence(),
		about: faker.lorem.paragraph(),
		category: faker.datatype.number(),
		financialResource: FINANCIAL_RESOURCES['lei-aldir-blanc'],
		subCategory: faker.datatype.number(),
		link: faker.internet.url(),
		cpf_cnpj: null,
		idUser: faker.datatype.number(),
		idUserRegistered: faker.datatype.number(),
		active: true,
		existSubProd: false,
		idSubProd: 0,
		createdAt: faker.date.past().toISOString(),
		idProduct: faker.datatype.number(),
		typeEvent: faker.datatype.number(),
		subject: faker.datatype.number(),
		local: faker.address.streetAddress(),
		updatedAt: faker.date.past().toISOString(),
		number: faker.address.buildingNumber(),
	}

	return {
		event_example,
	}
}

describe('Tests Entity Getter Events', () => {
	it('should return a valid object (Unitary)', () => {
		const { event_example } = makeSut()
		const result = GetterEvent.build(event_example)
		expect(result.params()).toEqual({
			...event_example,
			statusDate: STATUS_DATE['in-progress'],
		})
	})
	it('should return a valid object with undefined values (Unitary)', () => {
		const { event_example } = makeSut()
		const result = GetterEvent.build({
			...event_example,
			cep: undefined,
			statusDate: STATUS_DATE['in-progress'],
			neighborhood: undefined,
			complement: undefined,
		})
		expect(result.params()).toEqual({
			...event_example,
			cep: null,
			statusDate: STATUS_DATE['in-progress'],
			neighborhood: null,
			complement: null,
		})
	})
	it('should return a valid object with null values (Unitary)', () => {
		const { event_example } = makeSut()
		const result = GetterEvent.build({
			...event_example,
			cep: null,
			neighborhood: null,
			complement: null,
		})
		expect(result.params()).toEqual({
			...event_example,
			cep: null,
			statusDate: STATUS_DATE['in-progress'],
			neighborhood: null,
			complement: null,
		})
	})
	it('should return a valid statusDate (Unitary)', () => {
		const { event_example } = makeSut()
		const result = GetterEvent.build(event_example)
		expect(result.statusDate).toBeDefined()
		expectTypeOf(result.statusDate).toEqualTypeOf<STATUS_DATE>()
	})
	it('should return a valid statusDate in progress (Unitary)', () => {
		const { event_example } = makeSut()
		const { future, past } = presentDate()

		const result = GetterEvent.build({
			...event_example,
			dateStart: past,
			dateEnd: future,
		})

		expect(result.statusDate).toBeDefined()
		expectTypeOf(result.statusDate).toEqualTypeOf<STATUS_DATE>()
		expect(result.statusDate).toEqual(STATUS_DATE['in-progress'])
	})
	it('should return a valid statusDate done (Unitary)', () => {
		const { event_example } = makeSut()
		const { future, past } = pastDate(4)

		const result = GetterEvent.build({
			...event_example,
			dateStart: past,
			dateEnd: future,
		})

		expect(result.statusDate).toBeDefined()
		expectTypeOf(result.statusDate).toEqualTypeOf<STATUS_DATE>()
		expect(result.statusDate).toEqual(STATUS_DATE['done'])
	})
	it('should return a valid statusDate not-started (Unitary)', () => {
		const { event_example } = makeSut()
		const { future, past } = futureDate(4)

		const result = GetterEvent.build({
			...event_example,
			dateStart: past,
			dateEnd: future,
		})

		expect(result.statusDate).toBeDefined()
		expectTypeOf(result.statusDate).toEqualTypeOf<STATUS_DATE>()
		expect(result.statusDate).toEqual(STATUS_DATE['not-started'])
	})
})
