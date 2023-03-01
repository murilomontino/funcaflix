require('dotenv').config()

module.exports = {
	apps: [
		{
			name: 'homologacao',
			script: 'yarn',
			args: 'start:server',
			watch: ['.next'],
			//instances: 'max',
			//exec_mode: 'cluster',
		},
	],
}

// pm2 start npm --name "server" -i max  -- start
