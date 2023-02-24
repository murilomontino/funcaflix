// função que retira acentos da palavra, junta elas com join - e retorna a palavra sem acentos

function removeAccents(str: string) {
	return str?.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function removeCharacterSpecial(str: string) {
	return str?.normalize('NFD').replace(/[^a-zA-Zs]/g, '')
}

function removeAccentsAndJoin(str: string) {
	if (!str) return new Error('String not found')

	return removeAccents(str).replaceAll(' ', '-').toLowerCase()
}

export function removeCharacterSpecialAndJoin(str: string) {
	return removeCharacterSpecial(removeAccents(str))
		.split(' ')
		.join('-')
		.toLowerCase()
}

export const usernameGenerate = (name: string) => {
	const nameNormalize = name
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-zA-Z0-9 ]/g, '')
	const names = nameNormalize.split(' ')
	const username = names[0] + names[names.length - 1]
	return username
}

export const normalize = (name: string, id: number | string) => {
	const username = usernameGenerate(name)
	return `${process.env.URL}/${username}@${id}`
}

export default removeAccentsAndJoin
