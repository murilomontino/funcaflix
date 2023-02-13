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
    exclude: ['**/node_modules/**', '**/dist/**', "**/.docker/**"],
  },
  resolve: {
    alias: {
      '@/database': path.resolve(__dirname, 'backend', 'database'),
      '@/types': path.resolve(__dirname, 'types'),
      '@': path.resolve(__dirname, 'backend', 'core'),
    },
  },
})
