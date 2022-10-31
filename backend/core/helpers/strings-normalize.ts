// função que retira acentos da palavra, junta elas com join - e retorna a palavra sem acentos

function removeAccents(str: string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function removeCharacterSpecial(str: string) {
    return str.normalize('NFD').replace(/[^a-zA-Zs]/g, '')
}

function removeAccentsAndJoin(str: string) {
    return removeAccents(str).split(' ').join('-').toLowerCase()
}


export function removeCharacterSpecialAndJoin(str: string) {
    return removeCharacterSpecial(removeAccents(str)).split(' ').join('-').toLowerCase()
}

export default removeAccentsAndJoin