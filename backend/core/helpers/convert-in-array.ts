
export function converteInArray(elements: any): any[] {
    return Array.isArray(elements) ? elements : [elements]
}