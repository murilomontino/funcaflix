require('dotenv').config()

const { build } = require('mapacultural-database')

function main() {
	build()
		.then(() => {
			process.exit(0)
		})
		.catch((error) => {
			throw error
		})
}

main()
