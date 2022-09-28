import { config } from 'dotenv'
import path from 'path'
import { defineConfig } from 'vitest/config'
config()

export default defineConfig({
  root: __dirname,
  test: {
    testTimeout: 5000000,
    deps: {
      inline: true,
    },
  },
  resolve: {
    alias: {
      '@/database': path.resolve(__dirname, 'backend', 'database'),
      '@': path.resolve(__dirname, 'backend', 'core'),
    },
  },
})
