import { defineConfig } from 'vitest/config'

import { config } from 'dotenv'
import path from 'path'
config()

export default defineConfig({
  root: __dirname,
  test: {
    coverage: {
      provider: 'istanbul' // or 'c8'
    },
    reporters: ['html', 'default'],
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
      "@/__mocks__": path.resolve(__dirname, '__mocks__'),
      '@': path.resolve(__dirname, 'server', 'core'),
    },
  },
})
