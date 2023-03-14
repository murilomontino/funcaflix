require('dotenv').config()

module.exports = {
	apps: [
		{
			name: 'homologacao',
			script: 'yarn',
			args: 'start:server',
			watch: ['.next', 'dist'],
			max_memory_restart: "150M",
			autorestart: true,
		},
	],
}

// pm2 start npm --name "server" -i max  -- start
