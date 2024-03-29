import { FINANCIAL_RESOURCES } from '@/types/constants'

export function isValid(value: any): boolean {
	return value !== undefined && value !== null && value !== ''
}

export function isValidFinancialResource(value: any): boolean {
	return (
		isValid(value) &&
		typeof value === 'number' &&
		!isNaN(value) &&
		Object.values(FINANCIAL_RESOURCES).includes(value)
	)
}

export function isValidID(value: any): boolean {
	return (
		isValid(value) && typeof value === 'number' && !isNaN(value) && value > 0
	)
}

export function existItemsInArray(value: any): boolean {
	return Array.isArray(value) && value.length > 0
}
