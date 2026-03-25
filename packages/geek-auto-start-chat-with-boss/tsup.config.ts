import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'index.ts',
    'cityGroup.ts',
    'combineCalculator.ts',
    'constant.ts',
    'runtime-file-utils.ts',
    'sage-time.ts'
  ],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  dts: true,
  sourcemap: false,
  clean: true,
  external: [
    'debug',
    'puppeteer',
    'puppeteer-extra',
    'puppeteer-extra-plugin',
    'puppeteer-extra-plugin-stealth',
    'puppeteer-extra-plugin-anonymize-ua',
    '@geekgeekrun/puppeteer-extra-plugin-laodeng',
    'clone-deep',
    'merge-deep'
  ]
})
