import { config } from 'dotenv'
import path from 'path'
import { defineConfig } from 'vitest/config'
config()

export default defineConfig({
  root: __dirname,
  test: {
    coverage: {
      provider: 'istanbul' // or 'c8'
    },
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
