import { CATEGORIES } from "@/types/constants";

export function verifyCategory(category: number): boolean {
    return Object.values(CATEGORIES).indexOf(category as any) !== -1
}

export function verifiesCategories(categories: number[]): boolean {
    return categories.every(category => verifyCategory(category))
}