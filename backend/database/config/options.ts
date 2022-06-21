import { Dialect } from 'sequelize/types'

/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

export enum ENV {
	'development',
	'production',
	'test',
}

export type OPTIONS = {
	[key in ENV]: {
		database: string
		username: string
		password: string
		dialect: Dialect
		host: string
		port: number
	}
}

export const Options: OPTIONS = {
	[ENV.development]: {
		database: 'auxilio_cultural',
		username: 'root',
		password: 'admin',
		dialect: 'mariadb' as Dialect,
		host: 'localhost',
		port: 3306,
	},
	[ENV.production]: {
		dialect: 'mariadb' as Dialect,
		username: process.env.username as string,
		password: process.env.password as string,
		database: process.env.database as string,
		host: process.env.host as string,
		port: process.env.port as unknown as number,
	},
	[ENV.test]: {
		database: 'test',
		username: 'root',
		password: 'admin',
		dialect: 'mariadb' as Dialect,
		host: 'localhost',
		port: 3306,
	},
}

const env: ENV = (() => {
	if (process.env.NODE_ENV === 'development') {
		return ENV.development
	}

	if (process.env.NODE_ENV === 'production') {
		return ENV.production
	}

	return ENV.test
})()

export default Options[env]
