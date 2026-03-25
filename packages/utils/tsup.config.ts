import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'index.ts',
    'sleep.ts',
    'date.ts',
    'number.ts',
    'gpt-request.ts',
    'legacy-path.ts',
    'puppeteer/wait.ts',
    'puppeteer/local-storage.ts',
    'puppeteer/block-navigation.ts',
    'windows-only/file.ts'
  ],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  dts: true,
  sourcemap: false,
  clean: true
})
