
export function convertInArray<T>(elements: T): T[] {
    return Array.isArray(elements) ? elements : [elements]
}

export function convertElementsInArray<T, G>(elements: T[], parse: (arg: T) => G): G[] {
    return elements.map(element => parse(element))
}