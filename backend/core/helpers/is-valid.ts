export function isValid(value: any): boolean {
    return value !== undefined && value !== null && value !== ''
}
export function existItemsInArray(value: any): boolean {
    return Array.isArray(value) && value.length > 0
}