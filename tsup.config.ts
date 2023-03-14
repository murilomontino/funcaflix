import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['server'],
    target: 'node16.16',
    splitting: false,
    sourcemap: false,
    clean: true,
    outDir: 'dist',
})