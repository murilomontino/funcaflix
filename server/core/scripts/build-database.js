require('dotenv').config()

const { build } = require('mapacultural-database')

async function __main__() {
	return new Promise((resolve, reject) => {
		build()
			.then(({ models }) => {
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
		setTimeout(() => {
			process.exit(0)
		}, 5000)
	})
	.catch((err) => {
		process.exit(1)
	})
