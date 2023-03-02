require('dotenv').config()

module.exports = {
	apps: [
		{
			name: 'homologacao',
			script: 'yarn',
			args: 'start:server',
			watch: ['.next'],
			max_memory_restart: "150M",
			autorestart: true,
			//instances: 'max',
			//exec_mode: 'cluster',
		},
	],
}

// pm2 start npm --name "server" -i max  -- start
