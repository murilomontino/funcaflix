import { CATEGORIES } from '@/types/constants'

export function verifyCategory(category: string): boolean {
	return Object.values(CATEGORIES).indexOf(category as any) !== -1
}

export function verifiesCategories(categories: string[]): boolean {
	return categories.every((category) => verifyCategory(category))
}
