import { config } from 'dotenv'
import { build } from 'mapacultural-database'
import { exit } from 'process'

async function main() {
	build()
		.then(() => {
			exit()
		})
		.catch((error) => {
			throw error
		})
}

config()
main()
