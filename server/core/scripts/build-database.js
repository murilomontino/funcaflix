require('dotenv').config()

const { build } = require('mapacultural-database')

async function main() {
	await build().catch((error) => {
		throw error
	})
}

main().finally(() => {
	process.exit(0)
})
