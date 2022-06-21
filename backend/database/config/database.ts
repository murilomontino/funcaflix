/* eslint-disable import-helpers/order-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
/*
	CONFIGURAçÃO DO DATABASE
*/

import { Sequelize } from 'sequelize-typescript'

import options from './options'

export const database: Sequelize = new Sequelize({
	timezone: '-03:00',
	database: options.database,
	username: options.username,
	password: options.password,
	dialect: options.dialect,
	host: options.host,
	pool: { max: 1000, min: 0, acquire: 30000, idle: 300000 },
	port: options.port,
	logging: false,
})

export default database
