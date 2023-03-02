require('dotenv').config()

module.exports = {
  apps: [
    {
      name: 'funcaflix',
      script: 'npm',
      args: 'start',
      max_memory_restart: "150M",
      autorestart: true,
      watch: ['.next'],
      //instances: 'max',
      //exec_mode: 'cluster',
    },
  ],
}

// pm2 start npm --name "server" -i max  -- start
