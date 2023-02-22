import { config } from 'dotenv'
import { build } from 'mapacultural-database'
import { exit } from 'process'

async function main() {
	await build().catch((error) => {
		throw error
	})
}

config()

main().then(() => {
	exit(0)
})
