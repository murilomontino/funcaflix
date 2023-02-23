require('dotenv').config()

const { build } = require('mapacultural-database')

async function __main__() {
	return new Promise((resolve, reject) => {
		build()
			.then(() => {
				console.log('Database built successfully')
				resolve()
			})
			.catch((err) => {
				console.log('Error building database')
				console.log(err)
				reject(err)
			})
	})
}

__main__()
	.then(() => {
		console.log('Exiting...')
		process.exit(0)
	})
	.catch((err) => {
		process.exit(1)
	})
