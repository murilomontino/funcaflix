import { faker } from '@faker-js/faker'
import { addYears } from 'date-fns'

export const getDate = (date: Date) => {
	return date
		.toLocaleDateString('pt-BR')
		.replace(/T.*/, '')
		.replace(/-/, '/')
		.slice(0, 10)
}

export const pastDate = (years = 2) => {
	const future = addYears(faker.date.past(), -years)
	const past = addYears(future, -years)

	return {
		future: getDate(future),
		past: getDate(past),
	}
}

export const presentDate = (years = 1) => {
	const now = new Date()
	const future = addYears(now, years)
	const past = addYears(now, -years)

	return {
		future: getDate(future),
		past: getDate(past),
	}
}

export const futureDate = (years = 1) => {
	const future = addYears(faker.date.future(), years)
	const past = addYears(future, -years)

	return {
		future: getDate(future),
		past: getDate(past),
	}
}
