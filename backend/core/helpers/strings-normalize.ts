// função que retira acentos da palavra, junta elas com join - e retorna a palavra sem acentos

function removeAccents(str: string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function removeAccentsAndJoin(str: string) {
    return removeAccents(str).split(' ').join('-').toLowerCase()
}

export default removeAccentsAndJoin