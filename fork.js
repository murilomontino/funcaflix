const cluster = require('cluster')
const { config } = require('dotenv')
const { database } = require('mapacultural-database')
const os = require('os')

const Server = require('./dist/app').default

config()

const Init = async () => {
	const server = new Server(process.env.EXPRESS_PORT)

	await server.start()

	// aguardar as conexões serem encerradas para só então encerrar o programa
	process.on('SIGTERM', async () => {
		console.log('server ending', new Date().toISOString())
		await database.close()
		await server.close(() => process.exit())
	})
}

const runPrimaryProcess = () => {
	const cpus = os.cpus().length

	console.log(`Primary ${process.pid} is running`)
	console.log(`Forking Server with ${cpus} processes\n`)

	for (let index = 0; index < cpus; index++) cluster.fork()

	// When Worker process has died, Log the worker
	cluster.on('exit', (worker, code, signal) => {
		if (code !== 0 && !worker.exitedAfterDisconnect) {
			console.log(`Worker ${worker.process.pid} died`)
			cluster.fork()
		}
	})
}

const runWorkerProcess = async () => {
	// if Worker process, master is false, cluster.isWorker is true
	// worker starts server for individual cpus
	// the worker created above is starting server
	await Init()
}

cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess()
