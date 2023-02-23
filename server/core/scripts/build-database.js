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

	setTimeout(() => {
		process.exit(1)
	}, [1000000])
}

main()
