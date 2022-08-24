/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')
const root = resolve(__dirname)

require('dotenv').config()

module.exports = {
	rootDir: root,
	verbose: true,
	preset: 'ts-jest',
	coveragePathIgnorePatterns: ['/node_modules/'],
	testMatch: [
		'<rootDir>/__tests__/**/*/*.spec.ts',
		'<rootDir>/__tests__/**/*/*.spec.js',
		'<rootDir>/__tests__/**/*/*.test.ts',
		'<rootDir>/source/**/*/*.spec.ts',
	],
	coverageReporters: ['json', 'html'],
	clearMocks: true,
	testEnvironment: 'node',
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/backend/core/$1',
	},
}
