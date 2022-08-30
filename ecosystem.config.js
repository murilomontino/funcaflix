/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

module.exports = {
  apps: [
    {
      name: 'FuncapFLIX',
      script: 'yarn',
      args: 'start',
      watch: ['.next'],
      instances: 'max',
      exec_mode: 'cluster',
    },
  ],
}

// pm2 start npm --name "server" -i max  -- start