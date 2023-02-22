require('dotenv').config()

import { build } from 'mapacultural-database'

async function main() {
	await build()
}

main()
