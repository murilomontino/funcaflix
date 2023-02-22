import { config } from 'dotenv'
import { build } from 'mapacultural-database'

async function main() {
	await build().catch((error) => {
		throw error
	})
}

config()

main().finally(() => {
	process.exit(0)
})
