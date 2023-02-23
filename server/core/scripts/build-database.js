require('dotenv').config()

const { build } = require('mapacultural-database')

function main() {
	build()
		.then(() => {
			process.exit(0)
		})
		.catch((error) => {
			console.log(error)
		})
}

main()

setTimeout(() => {
	process.exit(1)
}, [1000000])
