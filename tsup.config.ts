import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['server'],
    target: 'node16.16',
    splitting: false,
    sourcemap: true,
    clean: true,
    outDir: 'dist',
})