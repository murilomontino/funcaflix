import { config } from 'dotenv'
import path from 'path'
import { defineConfig } from 'vitest/config'
config()

export default defineConfig({
  root: __dirname,
  test: {
    deps: {
      inline: true,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'backend', 'core'),
    },
  },
})
